import VaccinationService, {
  VaccinationServiceToInsert,
} from "../domain/VaccinationService";
import Success from "../domain/Success";
import logger from "../misc/logger";
import VaccinationServiceModel from "../models/VaccinationServiceModel";
import VaccinationServiceLocationModel from "../models/vaccinationServiceLocationModel";
import CustomError from "../misc/CustomError";
import { StatusCodes } from "http-status-codes";

/**
 * Get all the vaccination services.
 * @returns {Promise<Success<VaccinationService>>}
 */
export const getVaccinationServices = async (): Promise<
  Success<VaccinationService[]>
> => {
  logger.info("Getting all vaccination services");

  const vaccinationService =
    await VaccinationServiceModel.getVaccinationServices();

  return {
    data: vaccinationService,
    message: "Vaccination services fetched successfully",
  };
};

/**
 * Get a single vaccination service by id.
 * @param {number} id
 * @returns {Promise<Success<VaccinationService>>}
 */
export const getVaccinationService = async (
  id: number
): Promise<Success<VaccinationService>> => {
  logger.info(`Getting vaccination service with id: ${id}`);

  const vaccinationService =
    await VaccinationServiceModel.getVaccinationService(id);

  return {
    data: vaccinationService,
    message: "Vaccination service fetched successfully",
  };
};

/**
 * Create a new Vaccination Service.
 * @param {VaccinationServiceToInsert} VaccinationService
 * @returns {Promise<Success<VaccinationService>>}
 */
export const createVaccinationService = async (
  vaccinationServiceData: VaccinationServiceToInsert
): Promise<Success<VaccinationService | void>> => {
  const { serviceLocation, ...vaccinationService } = vaccinationServiceData;

  const createdVaccinationService =
    await VaccinationServiceModel.createVaccinationService(vaccinationService)
      .then(async (data) => {
        const location =
          await VaccinationServiceLocationModel.createVaccinationServiceLocation(
            {
              vaccination_service_id: data[0].id,
              ...serviceLocation,
            }
          ).catch((err) => {
            VaccinationServiceModel.deleteVaccinationService(data[0].id);
            throw new CustomError(err, StatusCodes.INTERNAL_SERVER_ERROR);
          });
        return { serviceLocation: location[0], ...data[0] };
      })
      .catch((err) => {
        throw new CustomError(err, StatusCodes.INTERNAL_SERVER_ERROR);
      });

  logger.info("Vaccination service created successfully");

  return {
    data: createdVaccinationService,
    message: "Vaccination service created successfully",
  };
};

/**
 * Update an existing vaccination service.
 * @param {VaccinationService} vaccinationService
 * @returns {Promise<Success<VaccinationService>>}
 */
export const updateVaccinationService = async (
  vaccinationService: VaccinationService
): Promise<Success<VaccinationService>> => {
  const updatedVaccinationService =
    await VaccinationServiceModel.updateVaccinationService(vaccinationService);
  logger.info("Vaccination service updated successfully");

  return {
    data: updatedVaccinationService,
    message: "Vaccination service updated successfully",
  };
};

/**
 * Delete an existing vaccination service.
 * @param {number} id
 * @returns {Promise<Success<VaccinationService>>}
 */
export const deleteVaccinationService = async (
  id: number
): Promise<Success<VaccinationService>> => {
  await VaccinationServiceModel.deleteVaccinationService(id);

  logger.info("Vaccination service deleted successfully");

  return {
    message: "Vaccination service deleted successfully",
  };
};
