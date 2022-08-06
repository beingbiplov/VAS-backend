import { Router } from "express";

import {
  createVaccinationService,
  getVaccinationServices,
} from "../controllers/vaccinationServiceControllers";

const router = Router();

router.get("/", getVaccinationServices);
router.post("/", createVaccinationService);

export default router;
