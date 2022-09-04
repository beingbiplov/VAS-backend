import { Request } from "express";

interface AuthorizedRequest extends Request {
  authUser?: number;
}

interface TokenPayload {
  data: number;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userData: {};
}

export type AuthRequest = AuthorizedRequest;
export type DataStoredInToken = TokenPayload;
