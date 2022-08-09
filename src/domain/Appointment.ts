export default interface AppointmentInterface {
  id: number;
  patient_id: string;
  site_location: string;
  service_type: string;
  confirmation_code: string;
}

export type AppointmentToInsertInterface = Omit<AppointmentInterface, "id">;
