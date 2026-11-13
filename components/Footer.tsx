import Link from "next/link";
import { BRAND, SUPPORT_EMAIL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-400 md:flex-row">
        <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
        <p>
          Support:{" "}
          <a className="text-violet-300 hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <nav className="flex gap-5">
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/refund" className="hover:text-white">Refunds</Link>
        </nav>
      </div>
    </footer>
  );
}
