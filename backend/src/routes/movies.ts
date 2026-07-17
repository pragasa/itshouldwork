import { Router } from "express";
import { movieCatalog } from "../data/catalog.js";

export const moviesRouter = Router();

moviesRouter.get("/", (req, res) => {
  const query = String(req.query.query ?? "").toLowerCase();
  const genre = String(req.query.genre ?? "").toLowerCase();

  const items = movieCatalog.filter((movie) => {
    const matchesQuery = !query || movie.title.toLowerCase().includes(query) || movie.description.toLowerCase().includes(query);
    const matchesGenre = !genre || movie.genres.some((entry) => entry.toLowerCase() === genre);
    return matchesQuery && matchesGenre;
  });

  res.json({ data: items, total: items.length });
});

moviesRouter.get("/:id", (req, res) => {
  const movie = movieCatalog.find((entry) => entry.id === req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  return res.json({ data: movie });
});

moviesRouter.get("/:id/similar", (req, res) => {
  const movie = movieCatalog.find((entry) => entry.id === req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const similar = movieCatalog
    .filter((entry) => entry.id !== movie.id)
    .map((entry) => ({
      ...entry,
      similarity: entry.genres.some((genre) => movie.genres.includes(genre)) ? 0.92 : 0.75,
    }))
    .sort((left, right) => right.similarity - left.similarity);

  return res.json({ data: similar });
});