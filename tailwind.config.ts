import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Core blacks (warm) ── */
        'evolvia-bg': '#080808',
        'evolvia-surface': 'rgba(240,238,235,0.04)',
        'evolvia-surface-hover': 'rgba(240,238,235,0.08)',
        'evolvia-border': 'rgba(240,238,235,0.08)',
        'evolvia-border-hover': 'rgba(240,238,235,0.15)',

        /* ── Silver / Chrome (warm tint) ── */
        'evolvia-silver': '#8a8780',
        'evolvia-chrome': '#f0eeeb',
        'evolvia-platinum': '#f0eeeb',

        /* ── Text hierarchy (warm) ── */
        'evolvia-text': '#f0eeeb',
        'evolvia-text-secondary': '#b0ada8',
        'evolvia-muted': '#706e6c',

        /* ── Accent — amber CTA only ── */
        'evolvia-accent': '#c2620a',
        'evolvia-accent-light': '#a0510a',
        'evolvia-success': '#34d399',
      },
      fontSize: {
        'xxs':  ['11px', { lineHeight: '1.45' }],
        'xs':   ['13px', { lineHeight: '1.5'  }],
        'sm':   ['15px', { lineHeight: '1.7'  }],
        'base': ['17px', { lineHeight: '1.65' }],
        'lg':   ['20px', { lineHeight: '1.4'  }],
        'xl':   ['24px', { lineHeight: '1.3'  }],
        '2xl':  ['32px', { lineHeight: '1.2'  }],
        '3xl':  ['48px', { lineHeight: '1.1'  }],
        '4xl':  ['64px', { lineHeight: '1.05' }],
        '5xl':  ['80px', { lineHeight: '1.0'  }],
      },
      borderRadius: {
        'none': '0px',
        'xs':   '4px',
        'sm':   '8px',
        'md':   '12px',
        'lg':   '16px',
        'xl':   '24px',
        'full': '9999px',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'holographic': 'linear-gradient(135deg, #8a8780 0%, #f0eeeb 25%, #5a5753 50%, #c2bfb8 75%, #8a8780 100%)',
        'holographic-subtle': 'linear-gradient(135deg, rgba(138,135,128,0.1) 0%, rgba(240,238,235,0.05) 50%, rgba(138,135,128,0.1) 100%)',
      },
      boxShadow: {
        'silver-glow': '0 0 30px rgba(240,238,235,0.08)',
        'silver-glow-lg': '0 0 60px rgba(240,238,235,0.12)',
        'chrome': '0 1px 0 rgba(240,238,235,0.05), 0 -1px 0 rgba(240,238,235,0.02)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'grain': 'grain 0.5s steps(10) infinite',
        'holographic-shift': 'holographic-shift 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'holographic-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
