import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type AuthPayload = {
  sub: string;
  email: string;
};

export function signAccessToken(payload: AuthPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "15m" });
}

export function signRefreshToken(payload: AuthPayload) {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET) as AuthPayload;
}