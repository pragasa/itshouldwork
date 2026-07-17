export type MovieRecord = {
  id: string;
  title: string;
  description: string;
  genres: string[];
  releaseYear: number;
  imdb: number;
  rottenTomatoes: number;
  runtime: number;
  language: string;
  budget: number;
  revenue: number;
  posterUrl: string;
  score: number;
};

export const movieCatalog: MovieRecord[] = [
  {
    id: "orion",
    title: "Echoes of Orion",
    description: "A deep-space archivist discovers a signal that rewrites the history of humanity.",
    genres: ["Sci-Fi", "Drama"],
    releaseYear: 2026,
    imdb: 8.9,
    rottenTomatoes: 94,
    runtime: 142,
    language: "English",
    budget: 180_000_000,
    revenue: 640_000_000,
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    score: 97,
  },
  {
    id: "static",
    title: "Midnight Static",
    description: "A hacked radio station exposes a conspiracy stitched into the city's nocturnal pulse.",
    genres: ["Thriller", "Mystery"],
    releaseYear: 2025,
    imdb: 8.5,
    rottenTomatoes: 91,
    runtime: 128,
    language: "English",
    budget: 60_000_000,
    revenue: 210_000_000,
    posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    score: 94,
  },
  {
    id: "dispatch",
    title: "Sunset Dispatch",
    description: "A courier races across continents to deliver a map that can save a disappearing island.",
    genres: ["Adventure", "Family"],
    releaseYear: 2024,
    imdb: 8.1,
    rottenTomatoes: 88,
    runtime: 116,
    language: "Spanish",
    budget: 55_000_000,
    revenue: 180_000_000,
    posterUrl: "https://images.unsplash.com/photo-1489599735735-1506de4f4b2f?auto=format&fit=crop&w=1200&q=80",
    score: 91,
  },
];

export const trendWindows = ["24h", "7d", "30d"];