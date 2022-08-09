import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import * as authService from "../services/authService";
import CustomError from "../misc/CustomError";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError(
      "email and password are required",
      StatusCodes.BAD_REQUEST
    );
  }

  authService
    .authenticateUser({ email, password })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
