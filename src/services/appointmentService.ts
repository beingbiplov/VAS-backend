import AppointmentInterface, {
  AppointmentToInsertInterface,
} from "../domain/Appointment";
import Success from "../domain/Success";
import logger from "../misc/logger";
import AppointmentModel from "../models/AppointmentModel";

/**
 * Get all the appointments.
 * @returns {Promise<Success<AppointmentInterface>>}
 */
export const getAppointments = async (): Promise<
  Success<AppointmentInterface[]>
> => {
  logger.info("Getting all appointments");

  const appointments = await AppointmentModel.getAppointments();

  return {
    data: appointments,
    message: "Appointments fetched successfully",
  };
};

/**
 * Get a single appointment by id.
 * @param {number} id
 * @returns {Promise<Success<AppointmentInterface>>}
 */
export const getAppointment = async (
  id: number
): Promise<Success<AppointmentInterface>> => {
  logger.info(`Getting appointment with id: ${id}`);

  const appointment = await AppointmentModel.getAppointment(id);

  return {
    data: appointment,
    message: "Appointment fetched successfully",
  };
};

/**
 * Create a new appointment.
 * @param {AppointmentToInsertInterface} appointment
 * @returns {Promise<Success<AppointmentInterface>>}
 */
export const createAppointment = async (
  appointment: AppointmentToInsertInterface
): Promise<Success<AppointmentInterface>> => {
  const createdAppointment = await AppointmentModel.createAppointment(
    appointment
  );

  logger.info("Appointment created successfully");

  return {
    data: createdAppointment,
    message: "Appointment created successfully",
  };
};

/**
 * Update an existing appointment.
 * @param {AppointmentInterface} appointment
 * @returns {Promise<Success<AppointmentInterface>>}
 */
export const updateAppointment = async (
  appointment: AppointmentInterface
): Promise<Success<AppointmentInterface>> => {
  const updatedAppointment = await AppointmentModel.updateAppointment(
    appointment
  );
  logger.info("Appointment updated successfully");

  return {
    data: updatedAppointment,
    message: "Appointment updated successfully",
  };
};

/**
 * Delete an existing Appointment.
 * @param {number} id
 * @returns {Promise<Success<AppointmentInterface>>}
 */
export const deleteAppointment = async (
  id: number
): Promise<Success<AppointmentInterface>> => {
  await AppointmentModel.deleteAppointment(id);

  logger.info("Appointment deleted successfully");

  return {
    message: "Appointment deleted successfully",
  };
};
