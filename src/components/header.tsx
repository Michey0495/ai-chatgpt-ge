import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          GEO<span className="text-cyan-400"> Radar</span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/dashboard"
            className="hidden text-sm text-white/70 transition-all duration-200 hover:text-white sm:block"
          >
            ダッシュボード
          </Link>
          <Link
            href="/login"
            className="hidden text-sm text-white/70 transition-all duration-200 hover:text-white sm:block"
          >
            ログイン
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
          >
            無料で始める
          </Link>
        </nav>
      </div>
    </header>
  );
}
