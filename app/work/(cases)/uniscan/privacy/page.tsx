// app/work/(cases)/uniscan/privacy/page.tsx
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy – OCRScan",
  description:
    "Privacy policies for OCRScan mobile apps. Data collection, processing, storage, security, and user rights.",
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
      <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default async function Page() {
  const updated = "November 6, 2025";

  return (
    // Document-style: simple site bg, lighter "paper" panel for content
    <div className="relative">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                OCRScan — Privacy Policy
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Last updated: {updated}.
              </p>
            </header>

            <div className="mt-10 space-y-12 text-base leading-relaxed text-[var(--muted)]">
              <Section id="processing-location" title="Where processing happens">
                <p>
                  OCRScan is designed to keep your documents on your device. We do{" "}
                  <em>not</em> collect personal data on our servers.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All OCR, image processing, encryption, and key management occur on your device.</li>
                  <li>ML models and Tesseract language packs are bundled and executed locally.</li>
                </ul>
              </Section>

              <Section id="permissions" title="Permissions we use &amp; why">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Camera — to capture documents.</li>
                  <li>Photos/Media/Files / Storage — to read imports and write exports you request.</li>
                  <li>Biometrics (Fingerprint/Face) — optional vault unlock, if you enable it.</li>
                  <li>
                    Internet — only for OS-level needs or when <em>you</em> explicitly share/export to another app or location. No background uploads.
                  </li>
                  <li>
                    (Android manifest may declare Record Audio; the app does not record unless a future feature explicitly prompts you.)
                  </li>
                </ul>
              </Section>

              <Section id="data-sharing" title="Data sharing">
                <p>
                  The app does not share your data with third parties. When you choose to share/export, files are sent only to the destinations you select (e.g., another app, email, drive). You may choose encrypted export (<code>.uenc</code>).
                </p>
              </Section>

              <Section id="storage-retention" title="Data storage &amp; retention">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Scans and documents live in the app’s private storage.</li>
                  <li>Decrypted previews are temporary and auto-deleted; session auto-lock can be configured.</li>
                  <li>You control retention by deleting items or exporting encrypted archives.</li>
                </ul>
              </Section>

              <Section id="security" title="Security practices">
                <ul className="list-disc pl-6 space-y-2">
                  <li>AES-256-GCM encryption for the vault and encrypted exports.</li>
                  <li>Keys stored in SecureStore; optional passphrase + biometrics.</li>
                  <li>Screen-capture/recording blocked on sensitive screens to reduce leakage.</li>
                  <li>No cloud copy; nothing is sent to us.</li>
                </ul>
              </Section>

              <Section id="user-controls" title="User controls">
                <ul className="list-disc pl-6 space-y-2">
                  <li>You can view, export (encrypted), or delete your content at any time.</li>
                  <li>Disable biometrics or change your vault passphrase in Settings.</li>
                </ul>
              </Section>

              <Section id="children" title="Children’s privacy">
                <p>OCRScan is a professional utility and not directed to children.</p>
              </Section>

              <Section id="contact" title="Contact">
                <p>
                  For privacy questions or requests, contact the developer listed on the store page.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
