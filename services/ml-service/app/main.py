from __future__ import annotations

from collections import Counter
from typing import Literal

from fastapi import FastAPI
from pydantic import BaseModel, Field


app = FastAPI(title="Nova Recs ML Service", version="0.1.0")


class MovieFeature(BaseModel):
    movie_id: str = Field(alias="movieId")
    title: str
    genres: list[str]
    themes: list[str] = Field(default_factory=list)
    score: float = 0.0


class RecommendationRequest(BaseModel):
    user_id: str = Field(alias="userId")
    mood: str | None = None
    preferred_genres: list[str] = Field(default_factory=list, alias="preferredGenres")
    watched_movie_ids: list[str] = Field(default_factory=list, alias="watchedMovieIds")
    movies: list[MovieFeature]


class RecommendationResponse(BaseModel):
    movie_id: str = Field(alias="movieId")
    title: str
    score: float
    reason: str
    algorithm_type: Literal["collaborative", "content_based", "hybrid", "seasonal", "trending"] = Field(alias="algorithmType")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "nova-recs-ml"}


@app.post("/recommendations", response_model=list[RecommendationResponse])
def recommend(payload: RecommendationRequest) -> list[RecommendationResponse]:
    genre_counts = Counter(payload.preferred_genres)
    mood_bonus = {
        "happy": 0.08,
        "dark": 0.12,
        "adventurous": 0.1,
        "romantic": 0.06,
    }.get((payload.mood or "").lower(), 0.0)

    recommendations: list[RecommendationResponse] = []
    for movie in payload.movies:
        similarity = sum(1 for genre in movie.genres if genre in payload.preferred_genres)
        collaborative = 0.25 if movie.movie_id in payload.watched_movie_ids else 0.0
        content = min(0.45, similarity * 0.15)
        popularity = movie.score / 100
        total = round(popularity * 0.4 + content + collaborative + mood_bonus, 4)
        reason = "Hybrid fit across your preferences and similar audience behavior"
        if similarity:
            reason = f"Matches your interest in {', '.join(movie.genres[:2])}"
        if genre_counts:
            total = round(total + min(0.08, sum(genre_counts.get(genre, 0) for genre in movie.genres) * 0.02), 4)
        recommendations.append(
            RecommendationResponse(
                movieId=movie.movie_id,
                title=movie.title,
                score=total,
                reason=reason,
                algorithmType="hybrid" if similarity else "content_based",
            )
        )

    return sorted(recommendations, key=lambda item: item.score, reverse=True)