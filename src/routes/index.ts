import { Router } from "express";

import userRoutes from "./userRoutes";
import vaccinationServiceRoutes from "./vaccinationServiceRoutes";
import vaccinationServiceLocationRoutes from "./vaccinationServiceLocationRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/vaccination-service", vaccinationServiceRoutes);
router.use("/vaccination-service-location", vaccinationServiceLocationRoutes);

export default router;
