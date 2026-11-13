import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BRAND, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: `Terms of Service — ${BRAND}` };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <section>
        <h2>1. Agreement</h2>
        <p>
          These Terms of Service govern your use of {BRAND} (the &ldquo;Service&rdquo;), an AI-powered video clipping
          product operated by an individual developer (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using the
          Service you agree to these Terms. If you do not agree, do not use the Service.
        </p>
      </section>
      <section>
        <h2>2. The Service</h2>
        <p>
          {BRAND} lets you upload long-form videos and uses automated AI to identify engaging segments, crop them to
          vertical 9:16, add burned-in captions and export MP4 clips. AI output may contain errors, and we do not
          guarantee that any clip will achieve a particular level of views or engagement.
        </p>
      </section>
      <section>
        <h2>3. Accounts and eligibility</h2>
        <p>
          You must be at least 18 years old, or the age of majority where you live, to use the Service. You are
          responsible for your account and for all activity under it.
        </p>
      </section>
      <section>
        <h2>4. Plans, billing and credits</h2>
        <ul>
          <li>
            Starter Plan: $19/month. Pro Plan: $49/month. Pay-As-You-Go Credit Pack: $15 one-time for 20 video
            processing credits that never expire.
          </li>
          <li>
            Subscriptions renew monthly until cancelled. You may cancel at any time; access continues until the end of
            the paid period.
          </li>
          <li>
            Plan limits (uploads per month and maximum video length) are described in the pricing section and may be
            updated for future billing periods.
          </li>
          <li>Payments are handled by our payment provider acting as merchant of record. Taxes may apply.</li>
          <li>
            Refunds are governed by our <a href="/refund">Refund Policy</a>.
          </li>
        </ul>
      </section>
      <section>
        <h2>5. Your content</h2>
        <p>
          You retain ownership of the videos you upload and the clips generated from them. You grant us a limited
          license to host, process and transform your content solely to provide the Service to you. You represent that
          you own or have all necessary rights to the content you upload.
        </p>
      </section>
      <section>
        <h2>6. Acceptable use</h2>
        <p>You agree not to upload or generate content that:</p>
        <ul>
          <li>infringes anyone&rsquo;s copyright, trademark, privacy or other rights;</li>
          <li>is unlawful, hateful, harassing, sexually exploitative of minors, or otherwise harmful;</li>
          <li>contains malware or attempts to disrupt, reverse engineer or abuse the Service.</li>
        </ul>
        <p>We may remove content or suspend accounts that violate these Terms.</p>
      </section>
      <section>
        <h2>7. Intellectual property</h2>
        <p>
          The Service, including its software, design and branding, is owned by us and protected by law. These Terms
          do not grant you any rights in it other than the right to use the Service as described.
        </p>
      </section>
      <section>
        <h2>8. Disclaimer of warranties</h2>
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
          express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do
          not warrant that the Service will be uninterrupted or error-free.
        </p>
      </section>
      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for indirect, incidental, special or consequential
          damages, or loss of profits or data. Our total liability for any claim is limited to the amount you paid us
          in the three months before the claim arose.
        </p>
      </section>
      <section>
        <h2>10. Termination</h2>
        <p>
          You may stop using the Service at any time. We may suspend or terminate access if you breach these Terms or
          if required by law.
        </p>
      </section>
      <section>
        <h2>11. Changes</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Service after changes take effect means
          you accept the updated Terms.
        </p>
      </section>
      <section>
        <h2>12. Contact</h2>
        <p>
          Questions about these Terms? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
