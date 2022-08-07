import { Router } from "express";

import {
  createVaccinationService,
  getVaccinationServices,
  getVaccinationService,
  updateVaccinationService,
  deleteVaccinationService,
} from "../controllers/vaccinationServiceControllers";

const router = Router();

router.get("/", getVaccinationServices);
router.post("/", createVaccinationService);
router.get("/:id", getVaccinationService);
router.put("/:id", updateVaccinationService);
router.delete("/:id", deleteVaccinationService);

export default router;
