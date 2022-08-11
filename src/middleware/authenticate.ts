import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

import CustomError from "../misc/CustomError";
import { AuthRequest, DataStoredInToken } from "../domain/Authenticate";

const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const result = (await jwt.verify(
      accessToken as string,
      process.env.JWT_SECRET as string
    )) as DataStoredInToken;

    req.authUser = result.data;

    next();
  } catch (err) {
    next(new CustomError("Invalid access token", StatusCodes.UNAUTHORIZED));
  }
};

export default authenticate;
