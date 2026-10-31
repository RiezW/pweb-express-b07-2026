import type { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";
import { HttpError } from "../utils/http-error";

// POST /api/players
export const createPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { nickname } = req.body;

    if (!nickname || typeof nickname !== "string" || nickname.trim() === "") {
      throw new HttpError(400, "Nickname tidak boleh kosong");
    }

    const existingPlayer = await prisma.player.findUnique({
      where: { nickname: nickname.trim() },
    });

    if (existingPlayer) {
      throw new HttpError(409, "Nickname sudah dipakai");
    }

    const player = await prisma.player.create({
      data: {
        nickname: nickname.trim(),
      },
    });

    res.status(201).json({
      status: true,
      message: "Player berhasil dibuat",
      data: player,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/players/:player_id
export const getPlayerDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const playerId = Number(req.params.player_id);

    if (isNaN(playerId)) {
      throw new HttpError(400, "ID Player harus berupa angka");
    }

    const player = await prisma.player.findUnique({
      where: { id: playerId },
      include: {
        heroes: {
          include: {
            hero: true,
          },
        },
      },
    });

    if (!player) {
      throw new HttpError(404, "Player tidak ditemukan");
    }

    // Format list hero milik player sesuai contoh gambar di modul
    const formattedHeroes = player.heroes.map((ph) => ({
      heroId: ph.heroId,
      name: ph.hero.name,
      currency: ph.currency,
      pricePaid: ph.pricePaid,
    }));

    res.status(200).json({
      status: true,
      message: "Berhasil mengambil data player",
      data: {
        id: player.id,
        nickname: player.nickname,
        bp: player.bp,
        diamond: player.diamond,
        createdAt: player.createdAt,
        heroes: formattedHeroes,
      },
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/players/:player_id
export const updatePlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const playerId = Number(req.params.player_id);
    const { nickname } = req.body;

    if (isNaN(playerId)) {
      throw new HttpError(400, "ID Player harus berupa angka");
    }

    if (!nickname || typeof nickname !== "string" || nickname.trim() === "") {
      throw new HttpError(400, "Nickname tidak boleh kosong");
    }

    const existingPlayer = await prisma.player.findUnique({
      where: { id: playerId },
    });

    if (!existingPlayer) {
      throw new HttpError(404, "Player tidak ditemukan");
    }

    const nicknameTaken = await prisma.player.findUnique({
      where: { nickname: nickname.trim() },
    });

    if (nicknameTaken && nicknameTaken.id !== playerId) {
      throw new HttpError(409, "Nickname sudah dipakai player lain");
    }

    const updatedPlayer = await prisma.player.update({
      where: { id: playerId },
      data: { nickname: nickname.trim() },
    });

    res.status(200).json({
      status: true,
      message: "Player berhasil diupdate",
      data: updatedPlayer,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/players/:player_id
export const deletePlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const playerId = Number(req.params.player_id);

    if (isNaN(playerId)) {
      throw new HttpError(400, "ID Player harus berupa angka");
    }

    const existingPlayer = await prisma.player.findUnique({
      where: { id: playerId },
    });

    if (!existingPlayer) {
      throw new HttpError(404, "Player tidak ditemukan");
    }

    await prisma.player.delete({
      where: { id: playerId },
    });

    res.status(200).json({
      status: true,
      message: "Player berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/players/:player_id/topup
export const topUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const playerId = Number(req.params.player_id);
    const { amount } = req.body;

    if (isNaN(playerId)) {
      throw new HttpError(400, "ID Player harus berupa angka");
    }

    if (typeof amount !== "number" || !Number.isInteger(amount) || amount <= 0) {
      throw new HttpError(400, "Amount harus bilangan bulat lebih dari 0");
    }

    const player = await prisma.player.findUnique({
      where: { id: playerId },
    });

    if (!player) {
      throw new HttpError(404, "Player tidak ditemukan");
    }

    const updatedPlayer = await prisma.player.update({
      where: { id: playerId },
      data: {
        diamond: { increment: amount },
      },
    });

    res.status(200).json({
      status: true,
      message: "Top up berhasil",
      data: {
        playerId: updatedPlayer.id,
        amount,
        diamond: updatedPlayer.diamond,
      },
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/players/:player_id/matches
export const addMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const playerId = Number(req.params.player_id);
    const { result } = req.body;

    if (isNaN(playerId)) {
      throw new HttpError(400, "ID Player harus berupa angka");
    }

    if (result !== "WIN" && result !== "LOSE") {
      throw new HttpError(400, "Result harus WIN atau LOSE");
    }

    const player = await prisma.player.findUnique({
      where: { id: playerId },
    });

    if (!player) {
      throw new HttpError(404, "Player tidak ditemukan");
    }

    const bpEarned = result === "WIN" ? 300 : 100;

    const updatedPlayer = await prisma.player.update({
      where: { id: playerId },
      data: {
        bp: { increment: bpEarned },
      },
    });

    res.status(200).json({
      status: true,
      message: "Hadiah match berhasil ditambahkan",
      data: {
        playerId: updatedPlayer.id,
        result,
        bpEarned,
        bp: updatedPlayer.bp,
      },
    });
  } catch (error) {
    next(error);
  }
};