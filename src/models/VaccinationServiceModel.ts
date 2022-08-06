import db from "../db/db";
import VaccinationService, {
  VaccinationServiceToInsert,
} from "../domain/VaccinationService";

class VaccinationServiceModel {
  public static table = "vaccination_service";

  public static async getVaccinationServices() {
    const vaccinationServices = await db(VaccinationServiceModel.table)
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

  public static async getVaccinationService(id: number) {
    const vaccinationService = await db(VaccinationServiceModel.table)
      .where({ "vaccination_service.id": id })
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

    return vaccinationService;
  }

  public static async createVaccinationService(
    vaccinationService: VaccinationServiceToInsert
  ) {
    const createdVaccinationService = db(VaccinationServiceModel.table).insert(
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

  public static async updateVaccinationService(
    vaccinationService: VaccinationService
  ): Promise<VaccinationService> {
    const [updatedVaccinationService] = await db(VaccinationServiceModel.table)
      .where({ id: vaccinationService.id })
      .update(vaccinationService)
      .returning(["id", "name"]);

    return updatedVaccinationService;
  }
}

export default VaccinationServiceModel;
