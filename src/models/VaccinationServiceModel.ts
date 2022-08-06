import db from "../db/db";
import { VaccinationServiceToInsert } from "../domain/VaccinationService";

class VaccinationService {
  public static table = "vaccination_service";

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
