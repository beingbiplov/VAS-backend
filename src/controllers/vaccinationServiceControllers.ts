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
 * Get a single vaccination service.
 * @param {Request} req
 * @param {Response} res
 */
export const getVaccinationService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  vaccinationService
    .getVaccinationService(+id)
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
    serviceLocation,
  } = req.body;

  vaccinationService
    .createVaccinationService({
      name,
      no_of_dose,
      eligible_gender,
      eligible_minimum_age,
      eligible_ethnicity,
      serviceLocation,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Update an existing vaccination service.
 * @param {Request} req
 * @param {Response} res
 */
export const updateVaccinationService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = +req.params.id;

  const {
    name,
    no_of_dose,
    eligible_gender,
    eligible_minimum_age,
    eligible_ethnicity,
    serviceLocation,
  } = req.body;

  vaccinationService
    .updateVaccinationService({
      id,
      name,
      no_of_dose,
      eligible_gender,
      eligible_minimum_age,
      eligible_ethnicity,
      serviceLocation,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Delete an existing vaccination service.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteVaccinationService = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  vaccinationService
    .deleteVaccinationService(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
