import { Router } from "express";

import userRoutes from "./userRoutes";
import vaccinationServiceRoutes from "./vaccinationServiceRoutes";
import vaccinationServiceLocationRoutes from "./vaccinationServiceLocationRoutes";
import patientRoutes from "./patientRoutes";
import appointmentRoutes from "./appointmentRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/vaccination-service", vaccinationServiceRoutes);
router.use("/vaccination-service-location", vaccinationServiceLocationRoutes);
router.use("/patient", patientRoutes);
router.use("/appointment", appointmentRoutes);

export default router;
