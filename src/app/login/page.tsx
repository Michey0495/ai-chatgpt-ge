import Link from "next/link";
import { Header } from "@/components/header";

export const metadata = {
  title: "ログイン - GEO Radar",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-white">ログイン</h1>
          <p className="mt-2 text-sm text-white/50">
            GEO Radar にログインして、AI検索の可視性を確認しましょう
          </p>
          <form className="mt-8 space-y-4" action="#">
            <div>
              <label htmlFor="login-email" className="mb-1 block text-sm text-white/70">
                メールアドレス
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="mb-1 block text-sm text-white/70">
                パスワード
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-cyan-400 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
            >
              ログイン
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-white/40">
            アカウントをお持ちでない方は{" "}
            <Link
              href="/register"
              className="text-cyan-400 transition-all duration-200 hover:text-cyan-300"
            >
              無料登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
