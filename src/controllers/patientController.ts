import { NextFunction, Request, Response } from "express";

import * as patientService from "../services/patientService";

/**
 * Get all patients.
 * @param {Request} req
 * @param {Response} res
 */
export const getPatients = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  patientService
    .getPatients()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Get a single patient.
 * @param {Request} req
 * @param {Response} res
 */
export const getPatient = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  patientService
    .getPatient(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Create a new patient.
 * @param {Request} req
 * @param {Response} res
 */
export const createPatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    first_name,
    last_name,
    email,
    date_of_birth,
    ethnicity,
    gender,
    address,
    payment,
  } = req.body;

  patientService
    .createdPatient({
      first_name,
      last_name,
      email,
      date_of_birth: new Date(date_of_birth),
      ethnicity,
      gender,
      address,
      payment,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Update an existing patient.
 * @param {Request} req
 * @param {Response} res
 */
export const updatePatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = +req.params.id;

  const {
    first_name,
    last_name,
    email,
    date_of_birth,
    ethnicity,
    gender,
    address,
    payment,
  } = req.body;

  patientService
    .updatePatient({
      id,
      first_name,
      last_name,
      email,
      date_of_birth,
      ethnicity,
      gender,
      address,
      payment,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Delete an existing patient.
 * @param {Request} req
 * @param {Response} res
 */
export const deletePatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  patientService
    .deletePatient(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
