import PageHeader from "@/components/sections/PageHeader";
import CaseCard from "@/components/sections/CaseCard";

const cases = [
  {
    title: "Secure Messaging App",
    role: "Architecture & full‑stack delivery",
    stack: "Next.js, Socket.IO, FastAPI, PostgreSQL, RSA E2EE, KeyManager",
    body: "Built an E2EE chat: client‑side keygen, encrypted private key backup, passphrase restore, and modular KeyManager. Transitioned to user sessions and improved login flows.",
    src: "/case-thumbs/secure-messaging.svg",
  },
  {
    title: "Expo Trade / Sales App (SaaS)",
    role: "Mobile + backend; productization",
    stack: "Expo Router, Zustand→Context auth, Axios, FastAPI, Postgres",
    body: "Full app with hierarchical catalog, cart, orders, auth & search. Migrated toward SDK 53, fixed safe‑area/tab issues, added protected routes and dashboard.",
    src: "/case-thumbs/expo-trade.svg",
  },
  {
    title: "Scan Logger – Mercury CL‑2200",
    role: "Windows desktop app",
    stack: "Python (Tkinter, pystray, PIL)",
    body: "Multi‑scanner logging with live UI, row highlighting, tray control, ESC full‑screen toggle, focus management, daily CSV logs, EXE packaging & autostart.",
    src: "/case-thumbs/scan-logger.svg",
  },
  {
    title: "Verse‑n‑Music: Catalog & Crypto Shop",
    role: "Web & payments",
    stack: "Next.js, RainbowKit/Wagmi, Coinbase Pay, Firebase",
    body: "Rebuilt site with music & poems catalogs, 30 track pages, crypto ‘Collect’ flow (ETH/ERC20, TRX/TRC20), explorer verification, receipts, and success banners.",
    src: "/case-thumbs/verse-n-music.svg",
  },
  {
    title: "Iskra Yug – Android App",
    role: "Release engineering & compliance",
    stack: "Expo, Play Console, R8/ProGuard",
    body: "Prepared Play listing assets, privacy policy, internal testing, addressed obfuscation warnings, and aligned metadata with store requirements.",
    src: "/case-thumbs/iskra-yug.svg",
  },
  {
    title: "SecureMO – Auth & Users",
    role: "Backend + frontend auth",
    stack: "FastAPI, JWT, bcrypt, React UI",
    body: "Phase 1: register/login/me with JWT; Phase 2: 1:1 chat groundwork; Option B: encrypted private key backup; passphrase flows and admin visibility for partial key checks.",
    src: "/case-thumbs/securemo.svg",
  },
];

export default function Page(){
  return (
    <main className="bg-[#0B0F19]">
      <PageHeader title="Case Studies" subtitle="Selected projects using our real stack and outcomes." image="/brainwave/case-studies.svg" />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(c => <CaseCard key={c.title} {...c} />)}
        </div>
      </section>
    </main>
  );
}
