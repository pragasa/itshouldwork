import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { env } from "./config/env.js";
import { authRouter } from "./routes/auth.js";
import { moviesRouter } from "./routes/movies.js";
import { ratingsRouter } from "./routes/ratings.js";
import { recommendationsRouter } from "./routes/recommendations.js";
import { searchRouter } from "./routes/search.js";
import { usersRouter } from "./routes/users.js";
import { watchlistRouter } from "./routes/watchlist.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.CLIENT_ORIGIN,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(
    rateLimit({
      windowMs: 60_000,
      limit: 120,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: "nova-recs-api" });
  });

  app.use("/api/auth", authRouter);
  app.use("/api/movies", moviesRouter);
  app.use("/api/recommendations", recommendationsRouter);
  app.use("/api/ratings", ratingsRouter);
  app.use("/api/watchlist", watchlistRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/search", searchRouter);

  return app;
}

export function createHttpServer() {
  const app = createApp();
  const server = createServer(app);
  const io = new Server(server, {
    cors: { origin: env.CLIENT_ORIGIN },
  });

  io.on("connection", (socket) => {
    socket.emit("connected", { service: "nova-recs-api" });

    socket.on("watchlist:update", (payload) => {
      socket.broadcast.emit("watchlist:update", payload);
    });
  });

  return { app, server, io };
}