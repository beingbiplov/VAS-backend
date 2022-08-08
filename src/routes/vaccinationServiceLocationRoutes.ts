import { Router } from "express";

import {
  createVaccinationServiceLocation,
  getVaccinationServiceLocations,
  getVaccinationServiceLocation,
  updateVaccinationServiceLocation,
  deleteVaccinationServiceLocation,
} from "../controllers/vaccinationServiceLocationController";

const router = Router();

router.post("/", createVaccinationServiceLocation);
router.get("/", getVaccinationServiceLocations);
router.get("/:id", getVaccinationServiceLocation);
router.put("/:id", updateVaccinationServiceLocation);
router.delete("/:id", deleteVaccinationServiceLocation);

export default router;
