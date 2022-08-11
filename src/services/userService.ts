import UserInterface, {
  UserToInsertInterface,
  UserToReturnInterface,
} from "../domain/User";
import Success from "../domain/Success";
import UserModel from "../models/UserModel";
import { generatePasswordHash } from "../utils/common";

/**
 * Get all the users.
 * @returns {Promise<Success<UserInterface>>}
 */
export const getUsers = async (): Promise<Success<UserToReturnInterface[]>> => {
  const users = await UserModel.getUsers();

  return {
    data: users,
    message: "Users fetched successfully",
  };
};

/**
 * Get a single user by id.
 * @param {number} id
 * @returns {Promise<Success<UserInterface>>}
 */
export const getUser = async (
  id: number
): Promise<Success<UserToReturnInterface>> => {
  const user = await UserModel.getUser(id);

  return {
    data: user,
    message: "User fetched successfully",
  };
};

/**
 * Create a new user.
 * @param {UserToInsertInterface} user
 * @returns {Promise<Success<UserToReturnInterface>>}
 */
export const createUser = async (
  user: UserToInsertInterface
): Promise<Success<UserToReturnInterface>> => {
  const { password } = user;

  const passwordHash = await generatePasswordHash(password);

  const createdUser = await UserModel.createUser({
    ...user,
    password: passwordHash,
  });
  return {
    data: createdUser,
    message: "User created successfully",
  };
};

/**
 * Update an existing user.
 * @param {UserInterface} user
 * @returns {Promise<Success<UserToReturnInterface>>}
 */
export const updateUser = async (
  user: UserInterface
): Promise<Success<UserToReturnInterface>> => {
  const { password } = user;
  let userToUpdate = { ...user };

  if (password) {
    const passwordHash = await generatePasswordHash(password);
    userToUpdate = { ...user, password: passwordHash };
  }

  const updatedUser = await UserModel.updateUser(userToUpdate);

  return {
    data: updatedUser,
    message: "User updated successfully",
  };
};

/**
 * Delete an existing user.
 * @param {number} id
 * @returns {Promise<Success<UserToReturnInterface>>}
 */
export const deleteUser = async (
  id: number
): Promise<Success<UserToReturnInterface>> => {
  await UserModel.deleteUser(id);

  return {
    message: "User deleted successfully",
  };
};
