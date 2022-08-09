import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../misc/CustomError";

import * as userService from "../services/userService";

/**
 * Get all users.
 * @param {Request} req
 * @param {Response} res
 */
export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  userService
    .getUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Get a single user.
 * @param {Request} req
 * @param {Response} res
 */
export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  userService
    .getUser(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Create a new user.
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, password, is_admin, is_active } = req.body;

  if (!email || !password) {
    throw new CustomError(
      "email and password are required",
      StatusCodes.BAD_REQUEST
    );
  }

  userService
    .createUser({
      email,
      password,
      is_admin,
      is_active,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Update an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const id: number = +req.params.id;

  const { email, password, is_admin, is_active } = req.body;

  if (!email && !password && is_admin && !is_active) {
    throw new CustomError("data not provided", StatusCodes.BAD_REQUEST);
  }
  userService
    .updateUser({
      id,
      email,
      password,
      is_admin,
      is_active,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Delete an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  userService
    .deleteUser(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
