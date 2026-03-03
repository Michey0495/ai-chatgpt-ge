import Link from "next/link";
import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <div className="text-center">
          <p className="text-6xl font-bold text-cyan-400">404</p>
          <h1 className="mt-4 text-2xl font-bold text-white">
            ページが見つかりません
          </h1>
          <p className="mt-2 text-white/50">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-cyan-400 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-300"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
