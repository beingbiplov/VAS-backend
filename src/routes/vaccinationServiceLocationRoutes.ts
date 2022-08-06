import { Router } from "express";

import {
  createVaccinationServiceLocation,
  getVaccinationServiceLocations,
  getVaccinationServiceLocation,
  updateVaccinationServiceLocation,
} from "../controllers/vaccinationServiceLocationController";

const router = Router();

router.post("/", createVaccinationServiceLocation);
router.get("/", getVaccinationServiceLocations);
router.get("/:id", getVaccinationServiceLocation);
router.put("/:id", updateVaccinationServiceLocation);

export default router;
