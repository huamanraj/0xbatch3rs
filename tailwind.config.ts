import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sylar: ['var(--font-sylar-rounded)'],
        vt323: ['var(--font-vt323)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        "brand-primary": "#00140a",
        "brand-secondary": "#1C1C1C",
        "brand-tertiary": "#2A2A2A",
        "accent-green-light": "#00E870",
        "accent-green": "#00cc63",
        "accent-green-dark": "#003d1f",
        "text-light": "#ffffff",
      },
      keyframes: {
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -10px' },
        },
        glitch1: {
          '0%': { clip: 'rect(0px, 350px, 30px, 30px)' },
          '20%': { clip: 'rect(30px, 350px, 60px, 30px)' },
          '40%': { clip: 'rect(60px, 350px, 90px, 30px)' },
          '60%': { clip: 'rect(90px, 350px, 120px, 30px)' },
          '80%': { clip: 'rect(120px, 350px, 150px, 30px)' },
          '100%': { clip: 'rect(150px, 350px, 180px, 30px)' },
        },
        glitch2: {
          '0%': { clip: 'rect(30px, 350px, 60px, 30px)' },
          '20%': { clip: 'rect(60px, 350px, 90px, 30px)' },
          '40%': { clip: 'rect(90px, 350px, 120px, 30px)' },
          '60%': { clip: 'rect(120px, 350px, 150px, 30px)' },
          '80%': { clip: 'rect(150px, 350px, 180px, 30px)' },
          '100%': { clip: 'rect(0px, 350px, 30px, 30px)' },
        },
      },
      animation: {
        'scanlines': 'scanlines 1s linear infinite',
        glitch1: 'glitch1 2s linear infinite alternate-reverse',
        glitch2: 'glitch2 2s linear infinite alternate-reverse',
      },
    },
  },
  plugins: [],
} satisfies Config;
