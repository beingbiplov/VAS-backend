import { Router } from "express";

import {
  createVaccinationServiceLocation,
  getVaccinationServiceLocations,
  getVaccinationServiceLocation,
} from "../controllers/vaccinationServiceLocationController";

const router = Router();

router.post("/", createVaccinationServiceLocation);
router.get("/", getVaccinationServiceLocations);
router.get("/:id", getVaccinationServiceLocation);

export default router;
