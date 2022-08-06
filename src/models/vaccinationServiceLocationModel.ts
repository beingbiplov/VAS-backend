import db from "../db/db";
import { VaccinationServiceLocationToInsert } from "../domain/vaccinationServiceLocation";

class VaccinationServiceLocation {
  public static table = "vaccination_service_location";

  public static async getVaccinationServiceLocations() {
    const vaccinationServiceLocations = await db(
      VaccinationServiceLocation.table
    ).select();

    return vaccinationServiceLocations;
  }

  public static async createVaccinationServiceLocation(
    vaccinationServiceLocation: VaccinationServiceLocationToInsert
  ) {
    const createdVaccinationServiceLocation = db(
      VaccinationServiceLocation.table
    ).insert(vaccinationServiceLocation, [
      "id",
      "province",
      "city",
      "address",
      "distribution_start_date",
      "distribution_end_date",
      "created_at",
      "vaccination_service_id",
    ]);

    return createdVaccinationServiceLocation;
  }
}

export default VaccinationServiceLocation;
