import { StatusCodes } from "http-status-codes";

import { userAuthData, UserToReturn } from "../domain/User";
import * as UserModel from "../models/UserModel";
import Success from "../domain/Success";
import CustomError from "../misc/CustomError";
import logger from "../misc/logger";

export const authenticateUser = async (
  userData: userAuthData
): Promise<Success<UserToReturn>> => {
  logger.info("Authenticating user");
  const matchedUser = await UserModel.authenticateUser(userData.email);

  if (matchedUser.password === userData.password) {
    const { password, ...dataToReturn } = matchedUser;
    return {
      data: dataToReturn,
      message: "User login successful!",
    };
  } else {
    throw new CustomError(
      "Username or password didn't match!",
      StatusCodes.UNAUTHORIZED
    );
  }
};
