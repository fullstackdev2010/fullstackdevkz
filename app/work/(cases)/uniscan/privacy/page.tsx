// app/privacy/page.tsx
import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy – UNIScan",
  description:
    "Privacy policies for UNIScan mobile apps. Data collection, processing, storage, security, and user rights.",
  alternates: { canonical: "/privacy" },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default async function Page() {
  // Content adapted from the provided privacy files (lightly formatted for the web).
  const updated = "November 6, 2025";

  return (
    <div className="relative">
      <section className="relative mx-auto max-w-5xl px-6 py-16">
        {/* UNISCAN POLICY */}
        <div className="mt-14 space-y-8">
          <Section id="uniscan" title="UNIScan — Privacy Policy">
            <p className="mt-3 text-[var(--muted)] max-w-prose">
              Last updated: {updated}.
            </p>
            <p>
              <strong>What we collect</strong>
              <br />
              We do <em>not</em> collect personal data on our servers. The app
              has no analytics SDKs and does not transmit your documents or
              recognized text to us.
            </p>

            <p>
              <strong>Where processing happens</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>All OCR, image processing, encryption, and key management occur on your device.</li>
              <li>ML models and Tesseract language packs are bundled and executed locally.</li>
            </ul>

            <p>
              <strong>Permissions we use &amp; why</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Camera – capture documents.</li>
              <li>Photos/Media/Files / Storage – read imported files and write exports to your device.</li>
              <li>Biometrics (Fingerprint/Face) – optional vault unlock, if you enable it.</li>
              <li>
                Internet – only for OS-level needs or if you explicitly
                share/export to another app or location. (No background uploads.)
              </li>
              <li>
                (Android manifest also declares Record Audio; the app does not
                record audio unless a future feature explicitly prompts you.)
              </li>
            </ul>

            <p>
              <strong>Data sharing</strong>
              <br />
              The app does not share your data with third parties. When you
              choose to share/export, files are sent only to the destinations you
              select (e.g., another app, email, drive). You can choose encrypted
              export (.uenc).
            </p>

            <p>
              <strong>Data storage &amp; retention</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Scans and documents live in the app’s private storage.</li>
              <li>Decrypted previews are temporary and auto-deleted; session auto-lock can be configured.</li>
              <li>You control retention by deleting items or exporting encrypted archives.</li>
            </ul>

            <p>
              <strong>Security practices</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>AES-256-GCM encryption for the vault and encrypted exports.</li>
              <li>Keys stored in SecureStore; optional passphrase + biometrics.</li>
              <li>Screen-capture/recording blocked on sensitive screens to reduce leakage.</li>
              <li>No cloud copy; nothing is sent to us.</li>
            </ul>

            <p>
              <strong>User controls</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>You can view, export (encrypted), or delete your content at any time.</li>
              <li>Disable biometrics or change your vault passphrase in Settings.</li>
            </ul>

            <p>
              <strong>Children’s privacy</strong>
              <br />
              UNIScan is a professional utility and not directed to children.
            </p>

            <p>
              <strong>Contact</strong>
              <br />
              For privacy questions or requests, contact the developer listed on
              the store page.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}
