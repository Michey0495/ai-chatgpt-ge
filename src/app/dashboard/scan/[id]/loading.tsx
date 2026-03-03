export default function ScanDetailLoading() {
  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 h-4 w-40 animate-pulse rounded bg-white/5" />
        <div className="h-8 w-48 animate-pulse rounded bg-white/10" />
        <div className="mt-2 h-4 w-72 animate-pulse rounded bg-white/5" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
      <div className="h-96 animate-pulse rounded-xl border border-white/10 bg-white/5" />
    </div>
  );
}
