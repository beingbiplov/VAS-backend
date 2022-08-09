import { StatusCodes } from "http-status-codes";

import db from "../db/db";
import AppointmentInterface, {
  AppointmentToInsertInterface,
} from "../domain/Appointment";
import CustomError from "../misc/CustomError";

class AppointmentModel {
  public static table = "appointment";

  public static async getAppointments() {
    const appointments = await db(AppointmentModel.table).select();

    return appointments;
  }

  public static async getAppointment(id: number) {
    const appointment = await db(AppointmentModel.table)
      .where({ id: id })
      .select()
      .first();
    if (appointment) {
      return appointment;
    }
    throw new CustomError("Invalid id.", StatusCodes.BAD_REQUEST);
  }

  public static async createAppointment(patient: AppointmentToInsertInterface) {
    const createdAppointment = db(AppointmentModel.table).insert(
      patient,
      "appointment.*"
    );

    return createdAppointment;
  }

  public static async updateAppointment(
    appointment: AppointmentInterface
  ): Promise<AppointmentInterface> {
    const [updatedAppointment] = await db(AppointmentModel.table)
      .where({ id: appointment.id })
      .update(appointment)
      .returning(["id"]);

    if (!updatedAppointment) {
      throw new CustomError("Invalid id.", StatusCodes.BAD_REQUEST);
    }
    return updatedAppointment;
  }

  public static async deleteAppointment(id: number): Promise<void> {
    const deletedAppointment = await db(AppointmentModel.table)
      .where({ id: id })
      .delete();

    if (!deletedAppointment) {
      throw new CustomError("Invalid id.", StatusCodes.BAD_REQUEST);
    }
  }
}

export default AppointmentModel;
