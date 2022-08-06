import { NextFunction, Request, Response } from "express";

import * as vaccinationService from "../services/vaccinationService";

/**
 * Get all vaccination services.
 * @param {Request} req
 * @param {Response} res
 */
export const getVaccinationServices = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  vaccinationService
    .getVaccinationServices()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Create a new vaccination service.
 * @param {Request} req
 * @param {Response} res
 */
export const createVaccinationService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    no_of_dose,
    eligible_gender,
    eligible_minimum_age,
    eligible_ethnicity,
  } = req.body;

  vaccinationService
    .createVaccinationService({
      name,
      no_of_dose,
      eligible_gender,
      eligible_minimum_age,
      eligible_ethnicity,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
