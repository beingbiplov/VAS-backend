import { Router } from "express";

import {
  createVaccinationServiceLocation,
  getVaccinationServiceLocations,
} from "../controllers/vaccinationServiceLocationController";

const router = Router();

router.post("/", createVaccinationServiceLocation);
router.get("/", getVaccinationServiceLocations);

export default router;
