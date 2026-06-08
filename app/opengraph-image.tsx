import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes en Bolivia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#004372',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Amber accent top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: '#F8AF00',
          }}
        />

        {/* Background pattern — subtle diagonal lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px 80px 52px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#F8AF00',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#004372', fontWeight: 700, fontSize: 24, lineHeight: 1 }}>
                S
              </span>
            </div>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 22, letterSpacing: 4 }}>
              SEGUREPP
            </span>
          </div>

          {/* Main text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p
              style={{
                color: '#F8AF00',
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Proveedor Integral · Bolivia
            </p>
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: 58,
                fontWeight: 700,
                lineHeight: 1.1,
                margin: 0,
                maxWidth: 800,
              }}
            >
              Equipos Médicos, Seguridad Industrial y Uniformes
            </h1>
          </div>

          {/* Bottom — 3 pills + tagline */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'Equipos Médicos', color: '#0E7490' },
                { label: 'Seguridad Industrial', color: '#1A6FBF' },
                { label: 'Uniformes', color: '#F8AF00', textColor: '#004372' },
              ].map(({ label, color, textColor }) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: color,
                    color: textColor ?? '#FFFFFF',
                    padding: '8px 20px',
                    borderRadius: 40,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <span style={{ color: '#94A3B8', fontSize: 14 }}>segurepp.com</span>
              <span style={{ color: '#64748B', fontSize: 12 }}>La Paz, Bolivia · Desde 2019</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
