const featuredMovies = [
  {
    title: "Echoes of Orion",
    genre: "Sci-Fi Drama",
    reason: "Because you rated thought-provoking world-building highly",
    score: "9.4",
  },
  {
    title: "Midnight Static",
    genre: "Neo-noir Thriller",
    reason: "Matches your dark, high-suspense viewing pattern",
    score: "9.1",
  },
  {
    title: "Sunset Dispatch",
    genre: "Adventure",
    reason: "Pairs well with recent feel-good adventure picks",
    score: "8.8",
  },
];

const discoverySignals = [
  ["Trending now", "Global 3D globe view"],
  ["Watchlist sync", "Real-time updates"],
  ["Smart search", "Typo tolerance + autocomplete"],
  ["Explainable AI", "Why this movie was recommended"],
];

const roadmap = [
  "Phase 1: auth, movies, ratings, basic recommendations",
  "Phase 2: 3D UI, social features, advanced recommendations",
  "Phase 3: analytics, SEO, and performance tuning",
  "Phase 4: ML pipeline and recommendation scaling",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-100">
      <section className="hero-grid mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <div className="glass-panel flex items-center justify-between gap-4 rounded-full px-4 py-3 text-xs uppercase tracking-[0.35em] text-slate-300">
          <span>Nova Recs</span>
          <span className="hidden sm:block">Movie discovery platform</span>
          <span className="text-emerald-300">Live</span>
        </div>

        <div className="grid flex-1 gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-2xl shadow-black/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Personalized, social, and explainable recommendations
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Find the right movie with cinematic search, real-time signals, and AI that explains itself.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                A production-shaped movie recommendation system with personalized feeds,
                social watchlists, advanced search, and a 3D-first visual language for modern discovery.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300" href="#discover">
                Explore recommendations
              </a>
              <a className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10" href="#roadmap">
                View roadmap
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              {discoverySignals.map(([label, value]) => (
                <div key={label} className="glass-panel rounded-3xl p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">{label}</div>
                  <div className="mt-3 text-sm font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-500/20 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] border-white/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Personalized feed</span>
                <span>Fresh every 30s</span>
              </div>

              <div className="mt-5 space-y-4">
                {featuredMovies.map((movie, index) => (
                  <article
                    key={movie.title}
                    className="movie-card rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-semibold text-white">{movie.title}</div>
                        <div className="mt-1 text-sm text-cyan-200">{movie.genre}</div>
                      </div>
                      <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                        {movie.score}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{movie.reason}</p>
                  </article>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                <div className="rounded-2xl bg-white/5 p-3">Hybrid model</div>
                <div className="rounded-2xl bg-white/5 p-3">Redis cache</div>
                <div className="rounded-2xl bg-white/5 p-3">Socket updates</div>
              </div>
            </div>
          </div>
        </div>

        <section id="discover" className="grid gap-4 border-t border-white/10 py-10 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Discovery", "Advanced filtering, autocomplete, and similar-movie carousels."],
            ["Social", "Reviews, follows, friend sharing, and watchlist collaboration."],
            ["SEO", "SSR, metadata, schema, sitemaps, and canonical pages."],
            ["Ops", "Docker, CI/CD, migrations, monitoring, and security controls."],
          ].map(([title, copy]) => (
            <article key={title} className="glass-panel rounded-[1.75rem] p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 border-t border-white/10 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-[0.35em] text-slate-400">Recommendation engine</div>
            <h2 className="text-3xl font-semibold text-white">Hybrid AI backed by behavioral signals and content embeddings.</h2>
            <p className="text-sm leading-6 text-slate-300">
              The system combines collaborative filtering, content-based similarity, implicit feedback,
              and explanation layers so every movie card can answer why it belongs in the feed.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roadmap.map((item) => (
              <div key={item} className="glass-panel rounded-3xl p-5 text-sm leading-6 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="border-t border-white/10 py-10">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.35em] text-cyan-200">Roadmap</div>
                <h3 className="mt-3 text-2xl font-semibold text-white">Built to grow from core discovery to ML-driven personalization.</h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                Frontend, API, ML service, and infra are organized as independent deployable units.
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
