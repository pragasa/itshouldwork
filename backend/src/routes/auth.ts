import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { signAccessToken, signRefreshToken } from "../lib/auth.js";

export const authRouter = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

authRouter.post("/login", async (req, res) => {
  const body = loginSchema.parse(req.body);
  const passwordHash = await bcrypt.hash(body.password, 12);

  res.json({
    user: {
      id: "user-demo",
      email: body.email,
    },
    accessToken: signAccessToken({ sub: "user-demo", email: body.email }),
    refreshToken: signRefreshToken({ sub: "user-demo", email: body.email }),
    passwordHash,
  });
});