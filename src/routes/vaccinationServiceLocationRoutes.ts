import { Router } from "express";

import { createVaccinationServiceLocation } from "../controllers/vaccinationServiceLocationController";

const router = Router();

router.post("/", createVaccinationServiceLocation);

export default router;
