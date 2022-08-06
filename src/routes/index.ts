import { Router } from "express";

import userRoutes from "./userRoutes";
import vaccinationServiceRoutes from "./vaccinationServiceRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/vaccination-service", vaccinationServiceRoutes);

export default router;
