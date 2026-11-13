import Link from "next/link";
import { BRAND } from "@/lib/site";

export default function Navbar({ home = false }: { home?: boolean }) {
  const p = home ? "" : "/";
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm">▶</span>
          {BRAND}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href={`${p}#how-it-works`} className="hover:text-white">How It Works</a>
          <a href={`${p}#pricing`} className="hover:text-white">Pricing</a>
          <a href={`${p}#faq`} className="hover:text-white">FAQ</a>
        </nav>
        <a
          href={`${p}#pricing`}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
