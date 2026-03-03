"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-red-400">Error</p>
        <h1 className="mt-4 text-2xl font-bold text-white">
          予期しないエラーが発生しました
        </h1>
        <p className="mt-2 text-white/50">
          {error.message || "ページの読み込み中に問題が発生しました。"}
        </p>
        <button
          onClick={reset}
          className="mt-6 cursor-pointer rounded-lg bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
        >
          もう一度試す
        </button>
      </div>
    </div>
  );
}
