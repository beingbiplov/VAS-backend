import { Router } from "express";

import {
  createVaccinationService,
  getVaccinationServices,
  getVaccinationService,
  updateVaccinationService,
} from "../controllers/vaccinationServiceControllers";

const router = Router();

router.get("/", getVaccinationServices);
router.post("/", createVaccinationService);
router.get("/:id", getVaccinationService);
router.put("/:id", updateVaccinationService);

export default router;
