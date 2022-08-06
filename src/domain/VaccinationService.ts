export default interface VaccinationService {
  id: number;
  name: string;
  no_of_dose: string;
  eligible_gender: string;
  eligible_minimum_age: number;
  eligible_ethnicity: string[];
}

export type VaccinationServiceToInsert = Omit<VaccinationService, "id">;
