import "dotenv/config";
import process from "node:process";

import { PrismaNeon } from "@prisma/adapter-neon";
import {
  PrismaClient,
  Currency,
  type Role,
  type Lane,
  type Rarity,
} from "../src/generated/prisma/client";

import heroes from "../data/heroes.json";
import skins from "../data/skins.json";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL_UNPOOLED!,
});

const prisma = new PrismaClient({
  adapter,
  log: ["warn", "error"],
});

async function main() {
  console.log("Starting database seed...");

  // 1. Clear existing records
  await prisma.$executeRaw`
    TRUNCATE TABLE "PlayerHero", "Player", "Skin", "Hero"
    RESTART IDENTITY CASCADE
  `;

  console.log("Existing records cleared.");

  // 2. Insert heroes
  await prisma.hero.createMany({
    data: heroes.map((hero) => ({
      name: hero.name,
      role: hero.role as Role,
      lane: hero.lane as Lane,
      releaseYear: hero.releaseYear,
      priceBP: hero.priceBP,
      priceDiamond: hero.priceDiamond,
    })),
  });

  console.log(`Inserted ${heroes.length} heroes.`);

  // 3. Insert skins
  await prisma.skin.createMany({
    data: skins.map((skin) => ({
      name: skin.name,
      heroId: skin.heroId,
      rarity: skin.rarity as Rarity,
      priceDiamond: skin.priceDiamond,
    })),
  });

  console.log(`Inserted ${skins.length} skins.`);

  // 4. Insert players
  await prisma.player.createMany({
    data: [
      {
        nickname: "ArekITS",
        bp: 1500,
        diamond: 75,
      },
      {
        nickname: "SangPushRank",
        bp: 13000,
        diamond: 2892,
      },
      {
        nickname: "MageSurabaya",
        bp: 10000,
        diamond: 0,
      },
    ],
  });

  console.log("Inserted 3 players.");

  // 5. Insert owned heroes
  await prisma.playerHero.createMany({
    data: [
      {
        playerId: 1,
        heroId: 18,
        currency: Currency.BP,
        pricePaid: 2000,
      },
      {
        playerId: 1,
        heroId: 1,
        currency: Currency.BP,
        pricePaid: 10800,
      },
      {
        playerId: 2,
        heroId: 84,
        currency: Currency.DIAMOND,
        pricePaid: 599,
      },
      {
        playerId: 2,
        heroId: 56,
        currency: Currency.BP,
        pricePaid: 32000,
      },
    ],
  });

  console.log("Inserted 4 PlayerHero records.");

  console.log("\nDatabase seed completed successfully!");
}

main()
  .catch((error) => {
    console.error("Database seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
