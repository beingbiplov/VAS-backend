import { StatusCodes } from "http-status-codes";
import db from "../db/db";
import {
  RefreshTokenInterface,
  RefreshTokenToInsertInterface,
} from "../domain/Token";
import CustomError from "../misc/CustomError";

class RefreshToken {
  private static table = "refresh_token";

  public static async getRefreshToken(
    refresh_token: string
  ): Promise<RefreshTokenInterface> {
    const getRefreshToken = await db(RefreshToken.table)
      .select()
      .where({ refresh_token })
      .first();

    return getRefreshToken;
  }

  public static async createRefreshToken(
    refreshToken: RefreshTokenToInsertInterface
  ): Promise<RefreshTokenInterface[]> {
    const newRefreshToken = await db(RefreshToken.table).insert(refreshToken, [
      "id",
      "refresh_token",
      "user_id",
      "expires_at",
    ]);

    return newRefreshToken;
  }

  public static async deleteByUserId(userId: number): Promise<void> {
    const deletedToken = await db(RefreshToken.table)
      .where({ user_id: userId })
      .delete();

    if (!deletedToken) {
      throw new CustomError("Token does not exist.", StatusCodes.BAD_REQUEST);
    }
  }
}

export default RefreshToken;
