'use client'
// Grain argentique — signature Evolvia
// Position absolute (pas fixed) pour perf iOS
// Couche 1: fractalNoise 0.035 — Couche 2: turbulence overlay 0.02
export function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 z-[2] pointer-events-none"
      aria-hidden="true"
    >
      {/* Couche 1 — fractalNoise */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g1)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          width: '100%',
          height: '100%',
        }}
      />
      {/* Couche 2 — turbulence overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.02,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g2)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
