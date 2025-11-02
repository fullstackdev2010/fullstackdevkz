import { ImageResponse } from '@vercel/og';
export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Fullstack Dev KZ';
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B0F19, #0F1423)',
          color: 'white',
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
          padding: '60px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: .5,
            background: 'radial-gradient(800px 500px at 20% 20%, rgba(122,162,255,.35), transparent), radial-gradient(800px 500px at 70% 70%, rgba(141,242,214,.35), transparent)'
          }}
        />
        <div style={{ position: 'relative', maxWidth: 1000, textAlign: 'center' }}>{title}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
