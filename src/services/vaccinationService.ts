import VaccinationService, {
  VaccinationServiceToInsert,
} from "../domain/VaccinationService";
import Success from "../domain/Success";
import logger from "../misc/logger";
import VaccinationServiceModel from "../models/VaccinationServiceModel";

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
 * Create a new Vaccination Service.
 * @param {VaccinationServiceToInsert} VaccinationService
 * @returns {Promise<Success<VaccinationService>>}
 */
export const createVaccinationService = async (
  vaccinationService: VaccinationServiceToInsert
): Promise<Success<VaccinationService>> => {
  const createdVaccinationService =
    await VaccinationServiceModel.createVaccinationService(vaccinationService);

  logger.info("Vaccination service created successfully");

  return {
    data: createdVaccinationService,
    message: "Vaccination service created successfully",
  };
};
