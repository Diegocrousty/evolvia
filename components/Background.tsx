// Fixed 4-layer background: warm base → subtle top glow → bottom warmth → vignette
export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Layer 1: Solid warm base */}
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />

      {/* Layer 2: Subtle warm top-left glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% -10%, rgba(240,238,235,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Layer 3: Very subtle warm bottom-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 80% 110%, rgba(194,98,10,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Layer 4: Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, var(--bg) 100%)',
        }}
      />
    </div>
  )
}
