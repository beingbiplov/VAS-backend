import { VaccinationServiceLocationDataToInsert } from "./vaccinationServiceLocation";

export default interface VaccinationService {
  id: number;
  name: string;
  no_of_dose: string;
  eligible_gender: string;
  eligible_minimum_age: number;
  eligible_ethnicity: string[];
  serviceLocation: VaccinationServiceLocationDataToInsert;
}

export type VaccinationServiceToInsert = Omit<VaccinationService, "id">;
export type VaccinationServiceDataOnly = Omit<
  VaccinationService,
  "id" | "serviceLocation"
>;
