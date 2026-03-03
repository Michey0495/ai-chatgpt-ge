import Link from "next/link";
import { Header } from "@/components/header";

export const metadata = {
  title: "新規登録 - GEO Radar",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-white">無料アカウント作成</h1>
          <p className="mt-2 text-sm text-white/50">
            まずは無料プランで、AI検索でのブランド可視性を確認
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">
                ブランド名 / サービス名
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
                placeholder="例: MyBrand"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                メールアドレス
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">
                パスワード
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 focus:border-cyan-400/50 focus:outline-none"
                placeholder="8文字以上"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-cyan-400 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
            >
              無料で始める
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-white/40">
            既にアカウントをお持ちの方は{" "}
            <Link
              href="/login"
              className="text-cyan-400 transition-all duration-200 hover:text-cyan-300"
            >
              ログイン
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
