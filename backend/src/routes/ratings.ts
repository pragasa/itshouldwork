import { Router } from "express";
import { z } from "zod";

export const ratingsRouter = Router();

const ratingSchema = z.object({
  movieId: z.string().min(1),
  rating: z.number().int().min(1).max(10),
  reviewText: z.string().max(500).optional(),
});

ratingsRouter.post("/", (req, res) => {
  const body = ratingSchema.parse(req.body);

  res.status(201).json({
    message: "Rating saved",
    data: {
      id: "rating-demo",
      ...body,
      createdAt: new Date().toISOString(),
    },
  });
});