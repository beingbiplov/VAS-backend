import { Router } from "express";

import {
  createVaccinationService,
  getVaccinationServices,
  getVaccinationService,
} from "../controllers/vaccinationServiceControllers";

const router = Router();

router.get("/", getVaccinationServices);
router.post("/", createVaccinationService);
router.get("/:id", getVaccinationService);

export default router;
