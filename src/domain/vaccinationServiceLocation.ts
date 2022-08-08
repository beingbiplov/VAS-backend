export default interface VaccinationServiceLocation {
  id: number;
  province: string;
  city: string;
  address: string;
  distribution_start_date: Date;
  distribution_end_date: Date;
  vaccination_service_id: number;
}

export type VaccinationServiceLocationToInsert = Omit<
  VaccinationServiceLocation,
  "id"
>;

export type VaccinationServiceLocationToUpdate = Omit<
  VaccinationServiceLocation,
  "vaccination_service_id"
>;
