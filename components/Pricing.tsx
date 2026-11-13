"use client";

import { useEffect, useState } from "react";
import { PLANS, SUPPORT_EMAIL, BRAND, type Plan } from "@/lib/site";

export default function Pricing() {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function close() {
    setSelected(null);
    setEmail("");
    setSent(false);
  }

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        setEmail("");
        setSent(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    const subject = encodeURIComponent(`${BRAND} early access: ${selected.name}`);
    const body = encodeURIComponent(
      `Please reserve my spot for the ${selected.name} (${selected.price}${selected.period}).\n\nMy email: ${email}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="pricing" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-zinc-400">Pick a monthly plan or pay as you go. Cancel anytime.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-900/30"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{plan.blurb}</p>
              <p className="mt-6 text-white">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className="text-zinc-400">{plan.period}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-zinc-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-violet-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelected(plan)}
                className={`mt-8 rounded-lg px-4 py-3 text-sm font-semibold ${
                  plan.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-title"
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#13131d] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="checkout-title" className="text-xl font-bold text-white">
              Early Access Checkout
            </h3>
            <p className="mt-1 text-sm text-violet-300">
              {selected.name} · {selected.price}
              {selected.period}
            </p>
            <p className="mt-4 text-sm text-zinc-300">
              Early Access Checkout — Enter your email to reserve your spot and receive your access link.
            </p>
            {sent ? (
              <div className="mt-6 space-y-4">
                <p className="rounded-lg bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  Your email app should have opened with your reservation request. If not, email us at{" "}
                  <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={close}
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4">
                <label className="block text-sm text-zinc-300">
                  Email address
                  <input
                    type="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-violet-500"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-500"
                >
                  Reserve my spot
                </button>
                <button type="button" onClick={close} className="w-full text-sm text-zinc-400 hover:text-white">
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
