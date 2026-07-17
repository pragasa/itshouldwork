import { Router } from "express";

export const usersRouter = Router();

usersRouter.get("/:id", (req, res) => {
  res.json({
    data: {
      id: req.params.id,
      email: "jane@example.com",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      preferences: {
        genres: ["Sci-Fi", "Adventure"],
        genreWeights: { "Sci-Fi": 0.42, Adventure: 0.31 },
      },
    },
  });
});