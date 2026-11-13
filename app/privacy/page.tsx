import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BRAND, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: `Privacy Policy — ${BRAND}` };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how {BRAND} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), operated by an individual
          developer, collects, uses and protects your information.
        </p>
      </section>
      <section>
        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Email address</strong> — when you reserve access, create an account or contact support.
          </li>
          <li>
            <strong>Uploaded videos</strong> — the files you submit for clipping, and the clips generated from them.
          </li>
          <li>
            <strong>Billing information</strong> — payments are handled by our payment provider (merchant of record).
            We do not store your full card details.
          </li>
          <li>
            <strong>Basic usage data</strong> — technical information such as browser type and pages visited, used to
            keep the Service reliable and secure.
          </li>
        </ul>
      </section>
      <section>
        <h2>3. How we use uploaded videos</h2>
        <p>
          Uploaded videos are used only to produce your clips (detecting hooks, cropping to 9:16, generating captions
          and rendering MP4 files). We do not sell your videos, publish them, or use them to train AI models. Videos
          are processed automatically and are <strong>deleted after rendering</strong>; generated clips are available
          for download for a limited period and are then deleted.
        </p>
      </section>
      <section>
        <h2>4. How we use your email</h2>
        <p>
          We use your email to deliver your access link, send receipts and service notices, and respond to support
          requests. We do not sell your email address.
        </p>
      </section>
      <section>
        <h2>5. Sharing</h2>
        <p>
          We share information only with service providers needed to operate the Service (such as hosting, video
          processing and payment processing), when required by law, or to protect our rights and users.
        </p>
      </section>
      <section>
        <h2>6. Retention and deletion</h2>
        <p>
          Uploaded source videos are deleted after rendering. Email and account records are kept while your account is
          active and as needed for legal and accounting purposes. You can request deletion of your data at any time by
          emailing <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
      <section>
        <h2>7. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your information, but no method of
          transmission or storage is completely secure.
        </p>
      </section>
      <section>
        <h2>8. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete or export your personal data and
          to object to certain processing. Contact us to exercise these rights.
        </p>
      </section>
      <section>
        <h2>9. Children</h2>
        <p>The Service is not directed to children under 18, and we do not knowingly collect their information.</p>
      </section>
      <section>
        <h2>10. Changes</h2>
        <p>We may update this policy and will post the new date above when we do.</p>
      </section>
      <section>
        <h2>11. Contact</h2>
        <p>
          Privacy questions? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
