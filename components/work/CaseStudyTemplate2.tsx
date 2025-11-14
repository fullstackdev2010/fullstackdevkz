import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { DeviceFrame } from '@/components/ui/DeviceFrame';
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import Link from "next/link";

export type KPI = { label: string; value: string; note?: string };

// NEW: explicit props type so we can add a design-appropriate Privacy link
type CaseStudyTemplateProps = {
  title: string;
  tagline: string;
  palette?: string[];
  heroImage?: string;
  kpis?: KPI[];
  gallery?: { src: string; alt?: string; platform?: 'ios'|'android' }[];
  /**
   * Optional privacy link. If provided, a subtle CTA button will be shown
   * in the hero. Point this at /work/(cases)/iskra/privacy for Iskra.
   */
  privacyHref?: string;
  privacyLabel?: string;
};

export function KPIStrip({ kpis }: { kpis: KPI[] }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {kpis.map((k) => (
        <GlassCard key={k.label}>
          <div className="text-sm text-[var(--muted)]">{k.label}</div>
          <div className="mt-1 text-2xl font-semibold">{k.value}</div>
          {k.note && <div className="text-xs mt-1 text-[var(--muted)]">{k.note}</div>}
        </GlassCard>
      ))}
    </div>
  );
}

export function DeviceGallery({ items }: { items: { src: string; alt?: string; platform?: 'ios'|'android' }[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <GlassCard key={i} className="p-4 flex items-center justify-center">
          <DeviceFrame platform={it.platform ?? 'android'} src={it.src} alt={it.alt ?? 'App screen'} width={320} height={640} />
        </GlassCard>
      ))}
    </div>
  );
}


function DescriptionCard({
  children,
}: {
  seed: string;
  palette?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border glass p-6 md:p-8">
      {/* Full-bleed mesh background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <MeshBackground
          brightness={0.6}
          opacity={0.95}
          seed="Iskra Trade — Mobile Catalog & Orders"
          palette={['#7AA2FF', '#8DF2D6', '#96ABFF']}
          static
        />
      </div>

      {/* Content above mesh */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyTemplate({
  title,
  tagline,
  palette,
  heroImage = '/demos/uniscan/01.png',
  kpis = [],
  gallery = [],
  // NEW: privacy link (optional)
  privacyHref,
  privacyLabel = 'Privacy Policy',
  }: CaseStudyTemplateProps) {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border glass p-8 md:p-12">
          {/* Mesh background confined to this section */}
            <MeshWithPhotoInsets
              className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
              backgroundSrc="/brand/main.webp"
              viewBox="0 0 1600 900"  // must match your mesh.svg viewBox
              photos={[
                // { href: "/demos/uniscan/01.jpg", x: 220, y: 160, w: 260, h: 390, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
              ]}
            />
          {/* Mesh background scoped to the hero card, like on app/page.tsx */}
            <div className="absolute inset-0">
              <MeshBackground
                brightness={0.8} 
                opacity={0.95}
                seed={title}          
                palette={palette}    
                static               
              />
            </div>
          <div className="relative z-10 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
              <p className="mt-3 text-[var(--muted)] max-w-prose">{tagline}</p>
              {kpis.length > 0 && <KPIStrip kpis={kpis} />}
              {/* NEW: subtle hero CTA for privacy */}
              {privacyHref && (
                <div className="mt-4">
                  <Link
                    href={privacyHref}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/5 transition"
                  >
                    <span>{privacyLabel}</span>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <DeviceFrame platform="android" src={heroImage} width={360} height={720} />
            </div>
          </div>
        </div>

        {gallery.length > 0 && <DeviceGallery items={gallery} />}

        <Section title="">
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">Overview</p><br></br>         
            <p className="text-[var(--muted)]">Uniscan is a privacy-first mobile scanner for Android and iOS (Expo + React Native) that captures documents, cleans them up, recognizes text fully offline, and lets you sign & encrypt files before you share. It ships with two OCR engines: Google ML Kit (unbundled, no Play Services) for Latin/Chinese/Devanagari/Japanese/Korean and Tesseract for Arabic/Cyrillic — both running on the device. A built-in encryption vault (AES-256-GCM) and optional biometric unlock keep clear files short-lived and encrypted by default.</p>
            <br></br>
            <p className="text-[var(--muted)]">Core flows:</p>             
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Scan or import images/PDFs → auto-crop/enhance → OCR on-device → export as text/PDF/DOCX.</li>
              <li>Encrypt before sharing (.uenc envelope) or keep inside the app’s vault.</li>
              <li>Bring files into Uniscan from other apps via Android’s Share sheet (custom native bridge).</li>
              <li>Automatic wipe of decrypted previews, session auto-lock, and screenshot/recording prevention while sensitive screens are open.</li>
            </ul>
          </DescriptionCard>
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">Targeted audience</p><br></br>                
            <ul className="list-disc pl-5 text-[var(--muted)]">
            <li>Field teams & SMBs that need fast capture + OCR with no cloud dependency.</li>
            <li>Legal/finance/healthcare staff who must keep data resident on the device.</li>
            <li>Privacy-conscious individuals who want local-only scanning and encryption.</li>
            <li>Developers/IT needing a secure scanning tool that still plays well with MDM and enterprise sharing.</li>
            </ul>
          </DescriptionCard>
        </Section>
        <Section title="">
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">The challenge</p><br></br>             
            <p className="text-[var(--muted)]">Most mobile scanners either upload to a cloud for OCR or bundle SDKs that phone home. That fails strict compliance and breaks in low-connectivity environments. Teams needed reliable OCR for multiple scripts, strong encryption, and hardened UX (no accidental screenshots or lingering decrypted files) — all without sending data off the device.</p>
          </DescriptionCard>
          <DescriptionCard seed={title} palette={palette}>
          <p className="text-2xl">Our approach</p><br></br>
          <p className="text-[var(--muted)]">100% on-device pipeline with native glue where it matters:</p>             
          <ul className="list-disc pl-5 text-[var(--muted)]">
            <li>Dual OCR engines, offline:</li>
              <p className="text-[var(--muted)]">ML Kit (unbundled) is baked into the app bundle, so recognition runs locally and works without Google Play Services.</p>
              <p className="text-[var(--muted)]">Tesseract (Android) via a custom native module (TesseractDirect) for Arabic/Cyrillic and other .traineddata packs. The app includes a tessdata bridge to point Tesseract at bundled language files.</p>
            <li>Defense-in-depth for clear data:</li>
              <p className="text-[var(--muted)]">Vault encryption uses AES-256-GCM via react-native-quick-crypto, with keys in SecureStore and optional passphrase + biometrics.</p>
              <p className="text-[var(--muted)]">Auto-wipe of temporary decrypted files when the app backgrounds; session auto-lock after inactivity; screen-capture blocking on sensitive screens.</p>  
            <li>Share-in / Share-out with control:</li>
              <p className="text-[var(--muted)]">Custom ShareBridge (Android) reads incoming share intents so documents can be received privately.</p>
              <p className="text-[var(--muted)]">Exports can be encrypted by default (.uenc envelope) before leaving the app, or shared as images/PDF/DOCX when policy allows.</p>    
            <li>Predictable file layout (no surprises):</li>
              <p className="text-[var(--muted)]">Private app directories such as uni-scans/ (captured images), uni-docs/ (imports/exports), and dedicated vault paths keep clear vs. encrypted data separated and manageable.</p>
            </ul>
          </DescriptionCard>
        </Section>
        <Section title="">
         <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">The stack</p><br></br>             
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Framework & runtime: Expo 53, React Native 0.79, React 19, Expo Router.</li>
              <li>Camera & media: expo-camera, expo-image-manipulator, expo-media-library, expo-sharing, expo-document-picker.</li>
              
              <li>OCR:</li>
              <ul className="list-disc pl-5 text-[var(--muted)]">
                <li>@react-native-ml-kit/text-recognition (unbundled model packs for latin/chinese/devanagari/japanese/korean).</li>
                <li>Tesseract Android native module (TesseractDirect) + tessdata bridge; .traineddata bundled in assets/tessdata/.</li>
              </ul>

              <li>Security & crypto:</li>
              <ul className="list-disc pl-5 text-[var(--muted)]">
                <li>Vault in lib/cryptoVault.ts using AES-256-GCM (react-native-quick-crypto) with PBKDF2 when encrypting via passphrase; keys in Expo SecureStore; optional biometrics via expo-local-authentication.</li>
                <li>Session lock, decrypted file wiper, screen-capture prevention (expo-screen-capture).</li>
              </ul>
              <li>Storage & OS bridges: expo-file-system, AsyncStorage, custom ShareBridge for Android share intents.</li>
              <li>Export & docs: docx, expo-print (PDF), plus image/PDF exporters; optional filename utilities and HTML export helpers.</li>

              <li>UI: Expo vector icons, Safe Area Context, bottom tabs; Skia available for image effects.</li>
              <li>Android config: minSdk 26 / targetSdk 35, ProGuard rules included; ML Kit + Tesseract plugins configure native dependencies at build time.</li>
            </ul>
          </DescriptionCard>
          <DescriptionCard seed={title} palette={palette}>
            <p className="text-2xl">Results</p><br></br>             
            <ul className="list-disc pl-5 text-[var(--muted)]">
              <li>Reliable OCR without network for Latin, CJK, Devanagari, Arabic, Cyrillic (and extensible via tessdata).</li>
              <li>Compliance-friendly posture: no analytics SDKs, no background uploads, no third-party cloud OCR.</li>
              <li>Safer sharing with one-tap encryption, short-lived clear previews, and screenshot blocking.</li>
              <li>Smooth UX: tabbed navigation for Scanner, Documents, Editor, Sign & Encrypt, Export, Settings, Vault; device haptics; polished camera flow.</li>
            </ul>
          </DescriptionCard>
        </Section>
        <div className="mt-16">
          <a href="/work" className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm">← Back to Work</a>
        </div>
      </div>
    </div>
  );
}
