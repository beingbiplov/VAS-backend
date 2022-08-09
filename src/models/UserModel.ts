import { StatusCodes } from "http-status-codes";

import db from "../db/db";
import UserInterface, {
  UserToInsertInterface,
  UserToReturnInterface,
} from "../domain/User";
import CustomError from "../misc/CustomError";

class UserModel {
  public static table = "user_account";
  public static userToReturnFields = ["id", "email", "is_admin", "is_active"];

  public static async getUsers() {
    const users = await db(UserModel.table)
      .select(UserModel.userToReturnFields)
      .where({ is_active: true });

    return users;
  }

  public static async getUser(id: number) {
    const user = await db(UserModel.table)
      .where({ id: id, is_active: true })
      .select(UserModel.userToReturnFields)
      .first();
    if (user) {
      return user;
    }
    throw new CustomError(
      "Active User for the id does not exist.",
      StatusCodes.NOT_FOUND
    );
  }

  public static async getUserByEmail(email: string): Promise<UserInterface> {
    const user = await db(UserModel.table)
      .where({ email: email, is_active: true })
      .first();
    if (user) {
      return user;
    }
    throw new CustomError(
      "Active User for the email does not exist.",
      StatusCodes.NOT_FOUND
    );
  }

  public static async createUser(user: UserToInsertInterface) {
    console.log(user);
    const createdUser = db(UserModel.table).insert(
      user,
      UserModel.userToReturnFields
    );
    console.log(createdUser);

    return createdUser;
  }

  public static async updateUser(
    user: UserInterface
  ): Promise<UserToReturnInterface> {
    const [updatedUser] = await db(UserModel.table)
      .where({ id: user.id })
      .update(user)
      .returning(UserModel.userToReturnFields);

    if (!updatedUser) {
      throw new CustomError("User id does not exist.", StatusCodes.BAD_REQUEST);
    }
    return updatedUser;
  }

  public static async deleteUser(id: number): Promise<void> {
    const deletedUser = await db(UserModel.table)
      .where({ id: id })
      .update({ is_active: false });

    if (!deletedUser) {
      throw new CustomError("User id does not exist.", StatusCodes.BAD_REQUEST);
    }
  }
}

export default UserModel;
