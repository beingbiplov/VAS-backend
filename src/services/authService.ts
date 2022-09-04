import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import { userAuthData } from "../domain/User";
import UserModel from "../models/UserModel";
import Success from "../domain/Success";
import CustomError from "../misc/CustomError";
import { checkPasswordMatch } from "../utils/common";
import TokenInterface from "../domain/Token";
import RefreshToken from "../models/RefreshToken";
import { createAccessToken, createRefreshToken } from "../utils/jwtToken";
import { LoginResponse } from "../domain/Authenticate";

export const authenticateUser = async (
  userData: userAuthData
): Promise<Success<LoginResponse>> => {
  const matchedUser = await UserModel.getUserByEmail(userData.email);

  const isPasswordCorrect = await checkPasswordMatch(
    matchedUser.password,
    userData.password
  );

  if (isPasswordCorrect) {
    const { password, ...dataToReturn } = matchedUser;

    const accessToken = createAccessToken(dataToReturn.id);

    const refreshToken = createRefreshToken(dataToReturn.id);

    await RefreshToken.createRefreshToken({
      refresh_token: refreshToken,
      user_id: dataToReturn.id,
      expires_at: new Date(Date.now() + 300000),
    });

    return {
      data: { accessToken, refreshToken, userData: dataToReturn },
      message: "User login successful!",
    };
  } else {
    throw new CustomError(
      "Username and password didn't match!",
      StatusCodes.UNAUTHORIZED
    );
  }
};

export const getAccessToken = async (
  refresh_token: string
): Promise<Success<string>> => {
  const existingToken = await RefreshToken.getRefreshToken(refresh_token);

  if (!existingToken) {
    throw new CustomError("Invalid refresh token", StatusCodes.UNAUTHORIZED);
  }

  if (existingToken.expires_at < new Date()) {
    throw new CustomError("Refresh token expired", StatusCodes.UNAUTHORIZED);
  }

  const { userId } = jwt.verify(
    existingToken.refresh_token,
    process.env.JWT_REFRESH_SECRET as string
  ) as { userId: number };

  const access_token = createAccessToken({ userId });

  return {
    data: access_token,
    message: "Access token created successful",
  };
};

export const deleteRefreshToken = async (
  userId: number
): Promise<Success<TokenInterface>> => {
  await RefreshToken.deleteByUserId(userId);
  return {
    message: "Refresh token deleted successfully",
  };
};
