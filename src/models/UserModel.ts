import { StatusCodes } from "http-status-codes";

import { User } from "../domain/User";
import users from "../users.json";
import CustomError from "../misc/CustomError";

export const authenticateUser = (email: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    const requiredUser = users.find((user) => user.email === email);
    if (requiredUser) {
      resolve(requiredUser);
    } else {
      reject(
        new CustomError(
          "Username or password didn't match!",
          StatusCodes.UNAUTHORIZED
        )
      );
    }
  });
};
