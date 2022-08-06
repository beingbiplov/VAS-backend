import db from "../db/db";
import { VaccinationServiceToInsert } from "../domain/VaccinationService";

class VaccinationService {
  public static table = "vaccination_service";

  public static async getVaccinationServices() {
    const vaccinationServices = await db(VaccinationService.table)
      .select([
        "vaccination_service.*",
        "vaccination_service_location.id as vaccination_service_location_id",
        "vaccination_service_location.province",
        "vaccination_service_location.city",
        "vaccination_service_location.address",
        "vaccination_service_location.distribution_start_date",
        "vaccination_service_location.distribution_end_date",
      ])
      .leftJoin(
        "vaccination_service_location",
        "vaccination_service.id",
        "=",
        "vaccination_service_location.vaccination_service_id"
      );

    return vaccinationServices;
  }

  public static async createVaccinationService(
    vaccinationService: VaccinationServiceToInsert
  ) {
    const createdVaccinationService = db(VaccinationService.table).insert(
      vaccinationService,
      [
        "id",
        "name",
        "no_of_dose",
        "eligible_gender",
        "eligible_minimum_age",
        "eligible_ethnicity",
      ]
    );

    return createdVaccinationService;
  }
}

export default VaccinationService;
