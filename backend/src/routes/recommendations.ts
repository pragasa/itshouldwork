import { Router } from "express";
import { movieCatalog } from "../data/catalog.js";

export const recommendationsRouter = Router();

recommendationsRouter.get("/", (_req, res) => {
  const data = movieCatalog.slice(0, 3).map((movie, index) => ({
    movie,
    reason: index === 0 ? "Because you loved cerebral sci-fi" : index === 1 ? "Because you watched similar thrillers" : "Because this balances your feed with adventure",
    algorithmType: index === 0 ? "hybrid" : index === 1 ? "collaborative" : "content_based",
    score: movie.score,
  }));

  res.json({ data });
});

recommendationsRouter.get("/trending", (_req, res) => {
  res.json({
    data: movieCatalog.map((movie) => ({
      ...movie,
      trendScore: movie.score,
    })),
  });
});