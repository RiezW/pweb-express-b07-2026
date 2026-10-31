import { Router } from "express";
import {
  createPlayer,
  getPlayerDetail,
  updatePlayer,
  deletePlayer,
  topUp,
  addMatch,
} from "../controllers/player.controller";

const router = Router();

router.post("/", createPlayer);
router.get("/:player_id", getPlayerDetail);
router.patch("/:player_id", updatePlayer);
router.delete("/:player_id", deletePlayer);
router.post("/:player_id/topup", topUp);
router.post("/:player_id/matches", addMatch);

export default router;