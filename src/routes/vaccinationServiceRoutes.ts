import { Router } from "express";

import { createVaccinationService } from "../controllers/vaccinationServiceControllers";

const router = Router();

router.post("/", createVaccinationService);

export default router;
