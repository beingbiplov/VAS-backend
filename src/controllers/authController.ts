import { Request, Response, NextFunction } from "express";

import * as userService from "../services/authService";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  userService
    .authenticateUser({ email, password })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
