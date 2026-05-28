import { ImageResponse } from 'next/og';

export const alt = "Women's Coliving Summit 2026 — Atlanta, October 16–17";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SPARKLES = [
  { x: 90, y: 70, s: 5 },
  { x: 240, y: 140, s: 4 },
  { x: 420, y: 70, s: 3 },
  { x: 760, y: 90, s: 4 },
  { x: 940, y: 50, s: 5 },
  { x: 1100, y: 140, s: 4 },
  { x: 60, y: 280, s: 3 },
  { x: 1140, y: 320, s: 5 },
  { x: 50, y: 480, s: 4 },
  { x: 200, y: 540, s: 5 },
  { x: 440, y: 570, s: 3 },
  { x: 780, y: 560, s: 4 },
  { x: 970, y: 510, s: 3 },
  { x: 1130, y: 540, s: 5 },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, #3d2029 0%, #1a0810 50%, #3d2029 100%)',
          fontFamily: 'Georgia, serif',
          color: '#F4EADE',
          position: 'relative',
          padding: 60,
        }}
      >
        {/* Top-center radial gold glow */}
        <div
          style={{
            position: 'absolute',
            top: 30,
            left: 150,
            width: 900,
            height: 500,
            background:
              'radial-gradient(ellipse, rgba(198,155,60,0.28) 0%, rgba(220,190,123,0.12) 30%, transparent 65%)',
            display: 'flex',
          }}
        />
        {/* Bottom-left subtle wash */}
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            left: -120,
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(220,190,123,0.10) 0%, transparent 60%)',
            display: 'flex',
          }}
        />

        {/* Sparkles */}
        {SPARKLES.map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y,
              width: p.s,
              height: p.s,
              borderRadius: p.s,
              background: '#DCBE7B',
              boxShadow: '0 0 10px #C69B3C, 0 0 20px rgba(198,155,60,0.5)',
              display: 'flex',
            }}
          />
        ))}

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            color: 'rgba(220,190,123,0.8)',
            textTransform: 'uppercase',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <span>October 16 – 17, 2026</span>
          <span
            style={{
              width: 6,
              height: 6,
              background: '#DCBE7B',
              borderRadius: 6,
              display: 'flex',
            }}
          />
          <span>Atlanta, Georgia</span>
        </div>

        {/* Ornament rule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            margin: '34px 0 22px',
            position: 'relative',
          }}
        >
          <div style={{ width: 120, height: 1, background: '#DCBE7B', opacity: 0.55, display: 'flex' }} />
          <div
            style={{
              width: 18,
              height: 18,
              background: '#DCBE7B',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 24px rgba(220,190,123,0.8)',
              display: 'flex',
            }}
          />
          <div style={{ width: 120, height: 1, background: '#DCBE7B', opacity: 0.55, display: 'flex' }} />
        </div>

        {/* Title — Women's Coliving */}
        <div
          style={{
            fontSize: 118,
            fontWeight: 500,
            lineHeight: 1.0,
            textAlign: 'center',
            color: '#F4EADE',
            letterSpacing: -3.5,
            position: 'relative',
          }}
        >
          Women&apos;s Coliving
        </div>
        {/* Title — Summit (gold italic) */}
        <div
          style={{
            fontSize: 130,
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.0,
            textAlign: 'center',
            color: '#DCBE7B',
            letterSpacing: -3.5,
            marginTop: 8,
            textShadow: '0 4px 28px rgba(198,155,60,0.45)',
            position: 'relative',
          }}
        >
          Summit
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'rgba(244,234,222,0.72)',
            marginTop: 36,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          Two days with the women building coliving.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
