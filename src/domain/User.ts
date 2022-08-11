export default interface UserInterface {
  id: number;
  email: string;
  password: string;
  is_admin?: boolean;
  is_active?: boolean;
}

export interface userAuthData {
  email: string;
  password: string;
}

export type UserToInsertInterface = Omit<UserInterface, "id">;

export type UserToReturnInterface = Omit<UserInterface, "password">;
