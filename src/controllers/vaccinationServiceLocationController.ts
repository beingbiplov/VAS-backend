import { NextFunction, Request, Response } from "express";

import * as vaccinationServiceLocationService from "../services/VaccinationServiceLocationService";

/**
 * Create a new vaccination service.
 * @param {Request} req
 * @param {Response} res
 */
export const createVaccinationServiceLocation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { province, city, address, vaccination_service_id } = req.body;

  const distribution_start_date = new Date(req.body.distribution_start_date);
  const distribution_end_date = new Date(req.body.distribution_end_date);

  vaccinationServiceLocationService
    .createVaccinationServiceLocation({
      province,
      city,
      address,
      distribution_start_date,
      distribution_end_date,
      vaccination_service_id,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
