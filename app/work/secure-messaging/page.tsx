import CaseStudyTemplate from '@/components/work/CaseStudyTemplate';
import DeviceCarousel from '@/components/work/DeviceCarousel';
import MetricBadge from '@/components/work/MetricBadge';

export default function Page() {
  return (
    <div className="relative">
      <CaseStudyTemplate
        title="Secure Messaging — E2EE with Passphrase Restore"
        tagline="End-to-end encryption, passphrase-protected private keys, and a clean UX for restore and error recovery."
        palette={['var(--brand-1)','var(--brand-3)','var(--brand-2)']}
        heroImage="/demos/secure-messaging/chat.png"
        kpis={[
          { label: 'p50 message send', value: '≤ 180 ms' },
          { label: 'Restore success', value: '98.7%' },
          { label: 'Crash-free', value: '99.6%' },
        ]}
        gallery={[]}
        challenge={<>
          Users demanded privacy-first messaging with a reliable passphrase-based key restore flow. Keys could not live in plaintext at rest or transit.
        </>}
        approach={<>
          Client-side RSA keypairs are generated per user; the private key is encrypted with a passphrase and stored server-side. On login, a guided restore modal decrypts the key in-memory. Socket transport (Socket.io) is layered under an E2EE session with per-chat keys.
        </>}
        result={<>
          We reached quick, reliable messaging with strong privacy guarantees. The restore workflow handles invalid/forgotten passphrases gracefully with retry and hints.
        </>}
      />

      <section className="relative mx-auto max-w-7xl px-6 pt-2 pb-16">
        <div className="mt-6 flex flex-wrap gap-2">
          <MetricBadge label="Keygen" value="RSA-2048 client-side" />
          <MetricBadge label="Backup" value="AES-GCM (passphrase)" />
          <MetricBadge label="Transport" value="Socket.io" />
          <MetricBadge label="Storage" value="Encrypted private key only" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border glass p-6">
            <h3 className="text-lg font-medium">Restore flow</h3>
            <ol className="mt-3 list-decimal pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>Login → detect missing local private key</li>
              <li>Prompt passphrase in secure modal</li>
              <li>Download encrypted blob → decrypt in-memory</li>
              <li>On success, keep in memory; optional session cache</li>
            </ol>
          </div>
          <div className="rounded-2xl border glass p-6">
            <h3 className="text-lg font-medium">Failure handling</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>Wrong passphrase → retry with backoff</li>
              <li>No blob → fallback verification path</li>
              <li>Never write decrypted key to disk by default</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <DeviceCarousel shots={[
            { src: '/demos/secure-messaging/login.png', platform: 'android', alt: 'Login' },
            { src: '/demos/secure-messaging/restore.png', platform: 'android', alt: 'Passphrase restore' },
            { src: '/demos/secure-messaging/chat.png', platform: 'android', alt: 'Chat' },
          ]} />
        </div>
      </section>
    </div>
  );
}
