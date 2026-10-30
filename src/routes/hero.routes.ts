import { Router } from "express";
import type { Role } from "../generated/prisma/client";
import prisma from "../config/prisma";

const router = Router();

// GET /api/heroes
router.get("/", async (req, res) => {
  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);

  const search = String(req.query.search ?? "");
  const role = req.query.role ? String(req.query.role) : undefined;

  const skip = (page - 1) * limit;

  const where = {
    ...(search
      ? {
          name: {
            contains: search,
            mode: "insensitive" as const,
          },
        }
      : {}),
    ...(role ? { role: role as Role } : {}),
  };

  const [heroes, totalItems] = await Promise.all([
    prisma.hero.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        id: "asc",
      },
    }),
    prisma.hero.count({ where }),
  ]);

  res.status(200).json({
    status: true,
    message: "Heroes retrieved successfully",
    data: heroes,
    metadata: {
      currentPage: page,
      limit,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
    },
  });
});

// GET /api/heroes/:hero_id
router.get("/:hero_id", async (req, res) => {
  const heroId = Number(req.params.hero_id);

  const hero = await prisma.hero.findUnique({
    where: {
      id: heroId,
    },
    include: {
      skins: true,
    },
  });

  if (!hero) {
    res.status(404).json({
      status: false,
      message: "Hero not found",
    });
    return;
  }

  res.status(200).json({
    status: true,
    message: "Hero retrieved successfully",
    data: hero,
  });
});

// POST /api/heroes
router.post("/", async (req, res) => {
  const {
    name,
    role,
    lane,
    releaseYear,
    priceBP,
    priceDiamond,
  } = req.body ?? {};

  // 1. Validate required fields
  if (!name || !role || !lane || releaseYear === undefined || releaseYear === null) {
    res.status(400).json({
      status: false,
      message: "Name, role, lane, and releaseYear are required",
    });
    return;
  }

  // 2. Check duplicate hero name
  const existingHero = await prisma.hero.findUnique({
    where: { name },
  });

  if (existingHero) {
    res.status(409).json({
      status: false,
      message: "Hero name already exists",
    });
    return;
  }

  // 3. Create hero
  const hero = await prisma.hero.create({
    data: {
      name,
      role,
      lane,
      releaseYear: Number(releaseYear),
      priceBP: priceBP === undefined || priceBP === null || priceBP === ""
        ? null
        : Number(priceBP),
      priceDiamond: priceDiamond === undefined || priceDiamond === null || priceDiamond === ""
        ? null
        : Number(priceDiamond),
    },
  });

  res.status(201).json({
    status: true,
    message: "Hero created successfully",
    data: hero,
  });
});

export default router;