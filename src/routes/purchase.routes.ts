// Fitur 6: Beli Hero -> POST /api/players/:player_id/heroes
import { Router, Request, Response } from "express";
import prisma from "../config/prisma";
import { HttpError } from "../utils/http-error";

const buyHero = async (req: Request, res: Response) => {
  const { heroId, currency } = req.body ?? {};

  // 1. heroId kosong / currency bukan BP|DIAMOND -> 400
  const heroIdNum = Number(heroId);
  if (
    heroId === undefined ||
    heroId === null ||
    heroId === "" ||
    !Number.isInteger(heroIdNum) ||
    (currency !== "BP" && currency !== "DIAMOND")
  ) {
    throw new HttpError(400, "heroId wajib diisi dan currency harus BP atau DIAMOND");
  }

  // 2. Player tidak ditemukan -> 404
  const playerId = Number(req.params.player_id);
  const player = Number.isInteger(playerId)
    ? await prisma.player.findUnique({ where: { id: playerId } })
    : null;
  if (!player) throw new HttpError(404, "Player tidak ditemukan");

  // 3. Hero tidak ditemukan -> 404
  const hero = await prisma.hero.findUnique({ where: { id: heroIdNum } });
  if (!hero) throw new HttpError(404, "Hero tidak ditemukan");

  // 4. Harga untuk currency tsb kosong -> 400
  const price = currency === "BP" ? hero.priceBP : hero.priceDiamond;
  if (price === null || price === undefined) {
    throw new HttpError(400, `Hero ${hero.name} tidak bisa dibeli dengan ${currency}`);
  }

  // 5. Sudah dimiliki -> 409
  const owned = await prisma.playerHero.findUnique({
    where: { playerId_heroId: { playerId, heroId: heroIdNum } },
  });
  if (owned) throw new HttpError(409, `Player sudah memiliki hero ${hero.name}`);

  // 6. Saldo kurang -> 400
  const balance = currency === "BP" ? player.bp : player.diamond;
  if (balance < price) {
    throw new HttpError(400, `Saldo ${currency} tidak cukup`);
  }

  // Transaction: kurangi saldo + buat PlayerHero
  const [updatedPlayer] = await prisma.$transaction([
    prisma.player.update({
      where: { id: playerId },
      data: currency === "BP" ? { bp: { decrement: price } } : { diamond: { decrement: price } },
    }),
    prisma.playerHero.create({
      data: { playerId, heroId: heroIdNum, currency, pricePaid: price },
    }),
  ]);

  res.status(201).json({
    status: true,
    message: "Hero berhasil dibeli",
    data: {
      hero: { id: hero.id, name: hero.name },
      currency,
      pricePaid: price,
      balance: { bp: updatedPlayer.bp, diamond: updatedPlayer.diamond },
    },
  });
};

const router = Router();
router.post("/:player_id/heroes", buyHero);

export default router;