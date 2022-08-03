import { Router } from "express";

import AuthenticationRoutes from "./userAuthenticationRoutes";

const router = Router();

router.use("/auth", AuthenticationRoutes);

export default router;
