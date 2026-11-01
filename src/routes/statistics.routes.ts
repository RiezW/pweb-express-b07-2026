// Fitur 7: Statistik -> GET /api/statistics
import { Router, Request, Response } from "express";
import prisma from "../config/prisma";

const getStatistics = async (_req: Request, res: Response) => {
  const [totalPlayers, totalHeroesOwned, diamondSum, topOwned, rolesGroup] = await Promise.all([
    prisma.player.count(),
    prisma.playerHero.count(),
    prisma.player.aggregate({ _sum: { diamond: true } }),
    prisma.playerHero.groupBy({
      by: ["heroId"],
      _count: { heroId: true },
      orderBy: [{ _count: { heroId: "desc" } }, { heroId: "asc" }],
      take: 1,
    }),
    prisma.hero.groupBy({
      by: ["role"],
      _count: { role: true },
      orderBy: { _count: { role: "desc" } },
    }),
  ]);

  let mostOwnedHero: { heroId: number; name: string; owners: number } | null = null;
  if (topOwned.length > 0) {
    const hero = await prisma.hero.findUnique({ where: { id: topOwned[0].heroId } });
    mostOwnedHero = {
      heroId: topOwned[0].heroId,
      name: hero?.name ?? "",
      owners: topOwned[0]._count.heroId,
    };
  }

  res.status(200).json({
    status: true,
    message: "Berhasil mengambil statistik",
    data: {
      totalPlayers,
      totalHeroesOwned,
      totalDiamond: diamondSum._sum.diamond ?? 0,
      mostOwnedHero,
      heroesPerRole: rolesGroup.map((r) => ({ role: r.role, total: r._count.role })),
    },
  });
};

const router = Router();
router.get("/", getStatistics);

export default router;