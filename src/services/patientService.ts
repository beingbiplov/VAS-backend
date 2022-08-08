import PatientInterface, { PatientToInsertInterface } from "../domain/Patient";
import Success from "../domain/Success";
import logger from "../misc/logger";
import PatientModel from "../models/PatientModel";

/**
 * Get all the patients.
 * @returns {Promise<Success<PatientInterface>>}
 */
export const getPatients = async (): Promise<Success<PatientInterface[]>> => {
  logger.info("Getting all patients");

  const patients = await PatientModel.getPatients();

  return {
    data: patients,
    message: "Patients fetched successfully",
  };
};

/**
 * Get a single patient by id.
 * @param {number} id
 * @returns {Promise<Success<PatientInterface>>}
 */
export const getPatient = async (
  id: number
): Promise<Success<PatientInterface>> => {
  logger.info(`Getting patient with id: ${id}`);

  const patient = await PatientModel.getPatient(id);

  return {
    data: patient,
    message: "Patient fetched successfully",
  };
};

/**
 * Create a new patient.
 * @param {PatientToInsertInterface} patient
 * @returns {Promise<Success<PatientInterface>>}
 */
export const createdPatient = async (
  patient: PatientToInsertInterface
): Promise<Success<PatientInterface>> => {
  const createdPatient = await PatientModel.createPatient(patient);

  logger.info("patient created successfully");

  return {
    data: createdPatient,
    message: "Patient created successfully",
  };
};

/**
 * Update an existing patient.
 * @param {PatientInterface} patient
 * @returns {Promise<Success<PatientInterface>>}
 */
export const updatePatient = async (
  patient: PatientInterface
): Promise<Success<PatientInterface>> => {
  const updatedPatient = await PatientModel.updatePatient(patient);
  logger.info("Patient updated successfully");

  return {
    data: updatedPatient,
    message: "Patient updated successfully",
  };
};

/**
 * Delete an existing patient.
 * @param {number} id
 * @returns {Promise<Success<PatientInterface>>}
 */
export const deletePatient = async (
  id: number
): Promise<Success<PatientInterface>> => {
  await PatientModel.deletePatient(id);

  logger.info("Patient deleted successfully");

  return {
    message: "Patient deleted successfully",
  };
};
