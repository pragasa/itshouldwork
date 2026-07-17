import { Router } from "express";
import { z } from "zod";

export const watchlistRouter = Router();

const watchlistSchema = z.object({
  movieId: z.string().min(1),
  status: z.enum(["watching", "watched", "planning"]).default("planning"),
});

watchlistRouter.post("/", (req, res) => {
  const body = watchlistSchema.parse(req.body);

  res.status(201).json({
    message: "Watchlist updated",
    data: {
      id: "watchlist-demo",
      ...body,
      addedAt: new Date().toISOString(),
    },
  });
});