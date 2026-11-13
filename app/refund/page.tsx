import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BRAND, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: `Refund Policy — ${BRAND}` };

export default function Refund() {
  return (
    <LegalPage title="Refund Policy">
      <section>
        <h2>7-day refund window</h2>
        <p>
          We want you to be happy with {BRAND}. Unused credit packs and subscriptions can be refunded within{" "}
          <strong>7 days of purchase</strong>. To request a refund, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the address used at purchase.
        </p>
      </section>
      <section>
        <h2>What is eligible</h2>
        <ul>
          <li>
            Starter Plan ($19/month) and Pro Plan ($49/month) subscriptions that have not been used to process
            videos, requested within 7 days of purchase.
          </li>
          <li>Pay-As-You-Go Credit Packs ($15 one-time) with no credits used, requested within 7 days of purchase.</li>
        </ul>
      </section>
      <section>
        <h2>What is not eligible</h2>
        <ul>
          <li>Requests made more than 7 days after purchase.</li>
          <li>Credits or uploads that have already been used.</li>
        </ul>
      </section>
      <section>
        <h2>Cancelling a subscription</h2>
        <p>
          You can cancel at any time to stop future renewals. Cancellation does not automatically refund the current
          period; refunds follow the rules above.
        </p>
      </section>
      <section>
        <h2>How refunds are issued</h2>
        <p>
          Approved refunds are returned to your original payment method through our payment provider, typically within
          5–10 business days. We aim to respond to every request within 2 business days.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your purchase email and plan.
        </p>
      </section>
    </LegalPage>
  );
}
