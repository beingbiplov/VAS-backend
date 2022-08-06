import VaccinationServiceLocation, {
  VaccinationServiceLocationToInsert,
} from "../domain/vaccinationServiceLocation";
import Success from "../domain/Success";
import logger from "../misc/logger";
import VaccinationServiceLocationModel from "../models/vaccinationServiceLocationModel";

/**
 * Get all the vaccination service locations.
 * @returns {Promise<Success<VaccinationServiceLocation>>}
 */
export const getVaccinationServiceLocations = async (): Promise<
  Success<VaccinationServiceLocation[]>
> => {
  logger.info("Getting all vaccination service locations");

  const vaccinationServiceLocation =
    await VaccinationServiceLocationModel.getVaccinationServiceLocations();

  return {
    data: vaccinationServiceLocation,
    message: "Vaccination service locations fetched successfully",
  };
};

/**
 * Create a new Vaccination Service Location.
 * @param {VaccinationServiceLocationToInsert} VaccinationServiceLocation
 * @returns {Promise<Success<VaccinationServiceLocation>>}
 */
export const createVaccinationServiceLocation = async (
  vaccinationServiceLocation: VaccinationServiceLocationToInsert
): Promise<Success<VaccinationServiceLocation>> => {
  const createdVaccinationServiceLocation =
    await VaccinationServiceLocationModel.createVaccinationServiceLocation(
      vaccinationServiceLocation
    );

  logger.info("Vaccination service location created successfully");

  return {
    data: createdVaccinationServiceLocation,
    message: "Vaccination service location created successfully",
  };
};
