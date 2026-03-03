export default function KeywordsLoading() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-8 w-48 animate-pulse rounded bg-white/10" />
          <div className="mt-2 h-4 w-64 animate-pulse rounded bg-white/5" />
        </div>
        <div className="h-10 w-40 animate-pulse rounded-lg bg-white/10" />
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 h-6 w-32 animate-pulse rounded bg-white/10" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="mb-3 h-12 animate-pulse rounded bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}
