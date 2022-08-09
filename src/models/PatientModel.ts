import { StatusCodes } from "http-status-codes";

import db from "../db/db";
import PatientInterface, { PatientToInsertInterface } from "../domain/Patient";
import CustomError from "../misc/CustomError";

class PatientModel {
  public static table = "patient";

  public static async getPatients() {
    const patients = await db(PatientModel.table).select();

    return patients;
  }

  public static async getPatient(id: number) {
    const patient = await db(PatientModel.table)
      .where({ id: id })
      .select()
      .first();
    if (patient) {
      return patient;
    }
    throw new CustomError(
      "Patient id does not exist.",
      StatusCodes.BAD_REQUEST
    );
  }

  public static async createPatient(patient: PatientToInsertInterface) {
    const createdPatient = db(PatientModel.table).insert(patient, "patient.*");

    return createdPatient;
  }

  public static async updatePatient(
    patient: PatientInterface
  ): Promise<PatientInterface> {
    const [updatedPatient] = await db(PatientModel.table)
      .where({ id: patient.id })
      .update(patient)
      .returning(["id"]);

    if (!updatedPatient) {
      throw new CustomError(
        "Patient id does not exist.",
        StatusCodes.BAD_REQUEST
      );
    }
    return updatedPatient;
  }

  public static async deletePatient(id: number): Promise<void> {
    const deletedPatient = await db(PatientModel.table)
      .where({ id: id })
      .delete();

    if (!deletedPatient) {
      throw new CustomError(
        "Patient id does not exist.",
        StatusCodes.BAD_REQUEST
      );
    }
  }
}

export default PatientModel;
