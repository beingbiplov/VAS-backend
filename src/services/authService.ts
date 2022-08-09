import { StatusCodes } from "http-status-codes";

import { userAuthData, UserToReturnInterface } from "../domain/User";
import UserModel from "../models/UserModel";
import Success from "../domain/Success";
import CustomError from "../misc/CustomError";
import { checkPasswordMatch } from "../utils/common";

export const authenticateUser = async (
  userData: userAuthData
): Promise<Success<UserToReturnInterface>> => {
  const matchedUser = await UserModel.getUserByEmail(userData.email);
  console.log(matchedUser, userData);
  const isPasswordCorrect = await checkPasswordMatch(
    matchedUser.password,
    userData.password
  );

  if (isPasswordCorrect) {
    const { password, ...dataToReturn } = matchedUser;
    return {
      data: dataToReturn,
      message: "User login successful!",
    };
  } else {
    throw new CustomError(
      "Username and password didn't match!",
      StatusCodes.UNAUTHORIZED
    );
  }
};
