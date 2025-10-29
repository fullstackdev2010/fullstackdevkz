export const metadata = { title: "Releases – Fullstack Dev KZ" };

type ReleaseEntry = {
  version: string;
  status?: "stable" | "beta" | "rc";
  highlights: string[];
  perf?: string[];
  security?: string[];
  compatibility?: string[];
  notes?: string[];
};

type Project = {
  name: string;
  codename?: string;
  description: string;
  caseStudyHref?: string;
  repoHref?: string;
  storeHref?: string;
  releases: ReleaseEntry[];
};

const projects: Project[] = [
  {
    name: "UniScan",
    codename: "secure-ocr-scanner",
    description:
      "Privacy-first mobile scanner built with Expo and React Native. Performs on-device OCR and secures data at rest with modern cryptography.",
    caseStudyHref: "/case-studies/uniscan",
    releases: [
      {
        version: "1.1.0",
        status: "stable",
        highlights: [
          "On-device OCR pipeline refactor (faster pre-processing, improved accuracy on low-light images)",
          "Encrypted export for PDF/ZIP (AES-GCM) with optional passphrase",
          "Biometric gate for opening the local vault (FaceID / Biometrics)",
        ],
        perf: [
          "OCR throughput +22% on mid‑range devices",
          "Cold start reduced by ~300ms via lazy imports",
        ],
        security: [
          "Secrets moved to Expo SecureStore",
          "Key derivation hardened (argon2id)",
        ],
        compatibility: [
          "Android 9+",
          "iOS 14+",
          "Expo SDK 53",
        ],
        notes: [
          "Adds background sync toggle and low‑memory capture guard.",
        ],
      },
      {
        version: "1.0.0",
        status: "stable",
        highlights: [
          "Initial public release with camera capture, document crops, and OCR",
          "Local encrypted vault, quick share, and basic history",
        ],
        perf: [
          "Edge detection tuned for business card and A4",
        ],
        security: [
          "Vault encryption with AES‑GCM; keys stored in SecureStore",
        ],
        compatibility: [
          "Android 9+",
          "iOS 14+",
        ],
      },
    ],
  },
  {
    name: "Iskra UG (Mobile)",
    codename: "iskraug",
    description:
      "Expo-based trading client: hierarchical catalog, cart & orders, resilient networking with offline‑aware UX.",
    caseStudyHref: "/case-studies/iskra-mobile",
    releases: [
      {
        version: "1.3.0",
        status: "stable",
        highlights: [
          "Auth refresh flow aligned with backend tokens",
          "Order history with incremental sync and skeleton UI",
          "Deep links for product details and pending carts",
        ],
        perf: [
          "Cold cache browse 1.8× faster with react-query prefetch",
          "Bundle size trimmed by code‑splitting low‑traffic routes",
        ],
        security: [
          "Secure session storage with SecureStore",
          "CORS & rate‑limit parity with backend",
        ],
        compatibility: [
          "Expo SDK 53",
          "Android 8+, iOS 13+",
        ],
        notes: [
          "Adds retry with backoff for unstable networks.",
        ],
      },
      {
        version: "1.2.0",
        status: "stable",
        highlights: [
          "Offline catalog cache with background revalidation",
          "Cart resilience (persisted; merges on login)",
        ],
        perf: [
          "List virtualization for large categories",
        ],
        security: [
          "Scoped tokens; logout clears sensitive caches",
        ],
        compatibility: [
          "Android 8+, iOS 13+",
        ],
      },
      {
        version: "1.0.0",
        status: "stable",
        highlights: [
          "MVP: catalog, search, cart, checkout and order confirmation",
          "Zustand state + React Query for data fetching",
        ],
      },
    ],
  },
];

function Pill({ children, tone = "default" }: { children: string; tone?: "default" | "accent" | "ok" | "warn" }) {
  const tones: Record<string, string> = {
    default: "bg-white/10 text-white",
    accent: "bg-fuchsia-600/80 text-white",
    ok: "bg-emerald-600/80 text-white",
    warn: "bg-amber-600/80 text-white",
  };
  return <span className={`inline-block px-2 py-0.5 rounded-md text-xs ${tones[tone]} whitespace-nowrap`}>{children}</span>;
}

export default function Page() {
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Releases</h1>
        <p className="text-violet-200 mb-10">Production snapshots of our shipped apps with highlights, performance notes and compatibility.</p>
        <div className="space-y-10">
          {projects.map((p) => (
            <section key={p.name} className="rounded-2xl border border-white/10 bg-[#262448]">
              <div className="p-5 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-medium">{p.name}</h2>
                  <Pill tone="accent">Expo</Pill>
                  {p.codename && <Pill>{p.codename}</Pill>}
                </div>
                <p className="text-violet-200 mt-2">{p.description}</p>
                <div className="mt-3 flex gap-3 text-sm">
                  {p.caseStudyHref && (
                    <a href={p.caseStudyHref} className="underline text-fuchsia-300">Case study →</a>
                  )}
                  {p.repoHref && (
                    <a href={p.repoHref} className="underline text-violet-300">Repository →</a>
                  )}
                  {p.storeHref && (
                    <a href={p.storeHref} className="underline text-violet-300">Store listing →</a>
                  )}
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {p.releases.map((r) => (
                  <div key={r.version} className="p-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">v{r.version}</h3>
                      <Pill tone="ok">{r.status ?? "stable"}</Pill>
                    </div>

                    {r.highlights?.length && (
                      <div className="mt-3">
                        <h4 className="text-sm uppercase tracking-wide text-violet-300">Highlights</h4>
                        <ul className="list-disc list-inside text-violet-200 mt-1 space-y-1">
                          {r.highlights.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      </div>
                    )}

                    {r.perf?.length && (
                      <div className="mt-3">
                        <h4 className="text-sm uppercase tracking-wide text-violet-300">Performance</h4>
                        <ul className="list-disc list-inside text-violet-200 mt-1 space-y-1">
                          {r.perf.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      </div>
                    )}

                    {r.security?.length && (
                      <div className="mt-3">
                        <h4 className="text-sm uppercase tracking-wide text-violet-300">Security</h4>
                        <ul className="list-disc list-inside text-violet-200 mt-1 space-y-1">
                          {r.security.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      </div>
                    )}

                    {r.compatibility?.length && (
                      <div className="mt-3">
                        <h4 className="text-sm uppercase tracking-wide text-violet-300">Compatibility</h4>
                        <ul className="list-disc list-inside text-violet-200 mt-1 space-y-1">
                          {r.compatibility.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      </div>
                    )}

                    {r.notes?.length && (
                      <div className="mt-3">
                        <h4 className="text-sm uppercase tracking-wide text-violet-300">Notes</h4>
                        <ul className="list-disc list-inside text-violet-200 mt-1 space-y-1">
                          {r.notes.map((h) => <li key={h}>{h}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
