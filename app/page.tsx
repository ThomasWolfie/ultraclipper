import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { BRAND, SUPPORT_EMAIL } from "@/lib/site";

const STEPS = [
  {
    n: "1",
    title: "Upload your long-form video",
    body: "Drop in a podcast, stream, webinar or interview. We handle the heavy lifting.",
  },
  {
    n: "2",
    title: "AI finds hooks & formats 9:16",
    body: "Our AI detects the most engaging moments, crops to vertical 9:16 and burns in dynamic captions.",
  },
  {
    n: "3",
    title: "Download ready-to-post MP4 clips",
    body: "Export polished clips and post straight to TikTok, Reels and YouTube Shorts.",
  },
];

const FAQ = [
  {
    q: "What kind of videos can I upload?",
    a: "Long-form talking-style content such as podcasts, interviews, streams, webinars and tutorials. Limits per video depend on your plan.",
  },
  {
    q: "What output do I get?",
    a: "Vertical 9:16 MP4 clips with burned-in captions, ready to post on TikTok, Instagram Reels and YouTube Shorts.",
  },
  {
    q: "What happens to my uploaded videos?",
    a: "Videos are processed to create your clips and are deleted after rendering. See our Privacy Policy for details.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. Unused subscriptions or credit packs can be refunded within 7 days of purchase. See our Refund Policy.",
  },
  { q: "Do credits expire?", a: "No. Credits from the Pay-As-You-Go Credit Pack never expire." },
  { q: "How do I contact support?", a: `Email us anytime at ${SUPPORT_EMAIL}.` },
];

export default function Home() {
  return (
    <>
      <Navbar home />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-violet-600/30 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
            <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1 text-xs font-medium text-violet-300">
              AI video clipping for creators
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Turn long videos into viral{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                short-form clips
              </span>{" "}
              with AI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Upload a long-form video. {BRAND} automatically extracts the viral hooks, crops to vertical 9:16, and
              burns in dynamic captions — ready for TikTok, Instagram Reels and YouTube Shorts.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-lg bg-violet-600 px-8 py-4 font-semibold text-white hover:bg-violet-500"
              >
                Start Creating
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-white/15 px-8 py-4 font-semibold text-white hover:bg-white/5"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl">How it works</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-600 font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        <section id="faq" className="scroll-mt-20 border-t border-white/10 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Frequently asked questions</h2>
            <div className="mt-12 space-y-4">
              {FAQ.map((f) => (
                <details key={f.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <summary className="cursor-pointer list-none font-medium text-white">{f.q}</summary>
                  <p className="mt-3 text-sm text-zinc-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
