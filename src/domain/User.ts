export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface userAuthData {
  email: string;
  password: string;
}

export type UserToReturn = Omit<User, "password">;
