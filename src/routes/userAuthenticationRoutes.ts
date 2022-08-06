import { Router } from "express";

import { authenticateUser } from "../controllers/authController";

const router = Router();

router.post("/login", authenticateUser);

export default router;
