export type Movie = {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  genres: string[];
  imdb: number;
  rottenTomatoes: number;
  runtime: number;
  language: string;
};

export type Recommendation = {
  movieId: string;
  reason: string;
  algorithmType: "collaborative" | "content_based" | "hybrid" | "seasonal" | "trending";
  score: number;
};

export type WatchlistStatus = "watching" | "watched" | "planning";

export type UserPreferenceWeights = Record<string, number>;