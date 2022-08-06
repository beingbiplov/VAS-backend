import VaccinationServiceLocation, {
  VaccinationServiceLocationToInsert,
  VaccinationServiceLocationToUpdate,
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
 * Get a single vaccination service location by id.
 * @param {number} id
 * @returns {Promise<Success<VaccinationServiceLocation>>}
 */
export const getVaccinationServiceLocation = async (
  id: number
): Promise<Success<VaccinationServiceLocation>> => {
  logger.info(`Getting vaccination service location with id: ${id}`);

  const vaccinationServiceLocation =
    await VaccinationServiceLocationModel.getVaccinationServiceLocation(id);

  return {
    data: vaccinationServiceLocation,
    message: "Vaccination service location fetched successfully",
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

/**
 * Update an existing vaccination service location.
 * @param {VaccinationServiceLocationToUpdate} vaccinationServiceLocation
 * @returns {Promise<Success<VaccinationServiceLocation>>}
 */
export const updateVaccinationServiceLocation = async (
  vaccinationServiceLocation: VaccinationServiceLocationToUpdate
): Promise<Success<VaccinationServiceLocation>> => {
  const updatedVaccinationServiceLocation =
    await VaccinationServiceLocationModel.updateVaccinationServiceLocation(
      vaccinationServiceLocation
    );
  logger.info("Vaccination service location updated successfully");

  return {
    data: updatedVaccinationServiceLocation,
    message: "Vaccination service location updated successfully",
  };
};
