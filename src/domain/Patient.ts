interface addressInterface {
  province: string;
  city: string;
  street: string;
}

interface paymentInterface {
  insurance_id: string;
  member_id: string;
  insurance_provider: string;
}

export default interface PatientInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
  ethnicity: string;
  gender: string;
  address: addressInterface;
  payment: paymentInterface;
}

export type PatientToInsertInterface = Omit<PatientInterface, "id">;
