import { NextFunction, Request, Response } from "express";

import * as appointmentService from "../services/appointmentService";

/**
 * Get all appointments.
 * @param {Request} req
 * @param {Response} res
 */
export const getAppointments = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  appointmentService
    .getAppointments()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Get a single appointment.
 * @param {Request} req
 * @param {Response} res
 */
export const getAppointment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  appointmentService
    .getAppointment(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Create a new appointment.
 * @param {Request} req
 * @param {Response} res
 */
export const createAppointment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { patient_id, site_location, service_type, confirmation_code } =
    req.body;

  appointmentService
    .createAppointment({
      patient_id,
      site_location,
      service_type,
      confirmation_code,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Update an existing appointment.
 * @param {Request} req
 * @param {Response} res
 */
export const updateAppointment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = +req.params.id;

  const { patient_id, site_location, service_type, confirmation_code } =
    req.body;

  appointmentService
    .updateAppointment({
      id,
      patient_id,
      site_location,
      service_type,
      confirmation_code,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Delete an existing appointment.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteAppointment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  appointmentService
    .deleteAppointment(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
