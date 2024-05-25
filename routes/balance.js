import { Router } from "express";
import getBalance from "../controllers/balance.controller.js";

const router = Router();

router.post("/balance", getBalance);

export default router;
