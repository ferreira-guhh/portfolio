/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        electric: {
          50:  '#e8fbff',
          100: '#b8f3ff',
          200: '#7ae9ff',
          300: '#2dd9ff',
          400: '#00c8f0',
          500: '#00aed4',
          600: '#0091b0',
          700: '#00718a',
          800: '#004f62',
          900: '#002f3c',
        },
        violet: {
          50:  '#f0eeff',
          100: '#d9d4ff',
          200: '#b8adff',
          300: '#9080ff',
          400: '#7c5cfc',
          500: '#6b3ef8',
          600: '#5a2edc',
          700: '#4520b0',
          800: '#301584',
          900: '#1c0b58',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'scan':       'scan 4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
