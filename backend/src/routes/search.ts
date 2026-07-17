import { Router } from "express";
import { movieCatalog } from "../data/catalog.js";

export const searchRouter = Router();

searchRouter.get("/", (req, res) => {
  const query = String(req.query.query ?? "").toLowerCase();
  const results = movieCatalog
    .filter((movie) => movie.title.toLowerCase().includes(query) || movie.description.toLowerCase().includes(query))
    .map((movie) => ({
      ...movie,
      autocomplete: [movie.title, ...movie.genres],
    }));

  res.json({
    query,
    results,
    suggestions: query ? [query, `${query} movie`, `${query} thriller`] : [],
  });
});