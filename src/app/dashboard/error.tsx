"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <p className="text-4xl font-bold text-red-400">Error</p>
        <h2 className="mt-4 text-xl font-bold text-white">
          データの読み込みに失敗しました
        </h2>
        <p className="mt-2 text-sm text-white/50">
          {error.message || "しばらくしてからもう一度お試しください。"}
        </p>
        <button
          onClick={reset}
          className="mt-6 cursor-pointer rounded-lg bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
        >
          再読み込み
        </button>
      </div>
    </div>
  );
}
