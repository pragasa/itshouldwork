# Nova Recs

Nova Recs is a monorepo for a movie recommendation platform.

## Structure

- `frontend`: Next.js frontend with a cinematic discovery landing page and SEO-aware routes.
- `backend`: Express API with auth, movie, recommendation, and watchlist endpoints.
- `services/ml-service`: FastAPI recommendation microservice.
- `packages/shared`: Shared TypeScript contracts.

## Local development

1. Copy `.env.example` to `.env` and fill in secrets.
2. Start the backing services with `npm run compose:up`.
3. Run the frontend with `npm run dev:frontend`.
4. Run the backend with `npm run dev:backend`.
5. Run the ML service with `npm run dev:ml`.

## Notes

- The frontend currently uses static mock data for the discovery experience.
- The API and ML service are scaffolded for production integration and can be connected to the backing services and Prisma schema."# itshouldwork" 
