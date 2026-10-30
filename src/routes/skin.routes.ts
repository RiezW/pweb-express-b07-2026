import { Router } from "express";
import type { Rarity } from "../generated/prisma/client";
import prisma from "../config/prisma";

const router = Router();

// GET /api/skins
router.get("/", async (req, res) => {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);

  const heroId = req.query.heroId
    ? Number(req.query.heroId)
    : undefined;

  const rarity = req.query.rarity
    ? String(req.query.rarity)
    : undefined;

  const skip = (page - 1) * limit;

  const where = {
    ...(heroId !== undefined ? { heroId } : {}),
    ...(rarity ? { rarity: rarity as Rarity } : {}),
  };

  const [skins, totalItems] = await Promise.all([
    prisma.skin.findMany({
      where,
      skip,
      take: limit,
      include: {
        hero: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    }),
    prisma.skin.count({ where }),
  ]);

  res.status(200).json({
    status: true,
    message: "Skins retrieved successfully",
    data: skins,
    metadata: {
      currentPage: page,
      limit,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
    },
  });
});

// GET /api/skins/:skin_id
router.get("/:skin_id", async (req, res) => {
  const skinId = Number(req.params.skin_id);

  const skin = await prisma.skin.findUnique({
    where: {
      id: skinId,
    },
    include: {
      hero: true,
    },
  });

  if (!skin) {
    res.status(404).json({
      status: false,
      message: "Skin not found",
    });
    return;
  }

  res.status(200).json({
    status: true,
    message: "Skin retrieved successfully",
    data: skin,
  });
});

export default router;