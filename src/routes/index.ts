import { Router } from "express";
import heroRouter from "./hero.routes";
import skinRouter from "./skin.routes";
import playerRoutes from "./player.routes"; // Ridwan
import purchaseRouter from "./purchase.routes"; // Nau Meow
import statisticsRouter from "./statistics.routes";


const router = Router();

router.use("/heroes", heroRouter);
router.use("/skins", skinRouter);
router.use("/players", playerRoutes); // Ridwan
router.use("/players", purchaseRouter); // Nau Meow
router.use("/statistics", statisticsRouter); 


export default router;
