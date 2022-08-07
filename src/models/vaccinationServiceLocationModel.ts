import db from "../db/db";
import VaccinationServiceLocation, {
  VaccinationServiceLocationToInsert,
  VaccinationServiceLocationToUpdate,
} from "../domain/vaccinationServiceLocation";

class VaccinationServiceLocationModel {
  public static table = "vaccination_service_location";

  public static async getVaccinationServiceLocations() {
    const vaccinationServiceLocations = await db(
      VaccinationServiceLocationModel.table
    ).select();

    return vaccinationServiceLocations;
  }

  public static async getVaccinationServiceLocation(id: number) {
    const vaccinationServiceLocation = await db(
      VaccinationServiceLocationModel.table
    )
      .where({ "vaccination_service_location.id": id })
      .select();

    return vaccinationServiceLocation;
  }

  public static async createVaccinationServiceLocation(
    vaccinationServiceLocation: VaccinationServiceLocationToInsert
  ) {
    const createdVaccinationServiceLocation = db(
      VaccinationServiceLocationModel.table
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

  public static async updateVaccinationServiceLocation(
    vaccinationServiceLocation: VaccinationServiceLocationToUpdate
  ): Promise<VaccinationServiceLocation> {
    const [updatedVaccinationServiceLocation] = await db(
      VaccinationServiceLocationModel.table
    )
      .where({ id: vaccinationServiceLocation.id })
      .update(vaccinationServiceLocation)
      .returning(["id", "province"]);

    return updatedVaccinationServiceLocation;
  }
  public static async deleteVaccinationServiceLocation(
    id: number
  ): Promise<void> {
    await db(VaccinationServiceLocationModel.table).where({ id: id }).delete();
  }
}

export default VaccinationServiceLocationModel;
