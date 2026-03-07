import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef8f3',
          100: '#fdeee0',
          200: '#fbd9ba',
          300: '#f8c08f',
          400: '#f49d5e',
          500: '#f17e3a',
          600: '#e2651f',
          700: '#bc4e18',
          800: '#963e1a',
          900: '#793519',
        },
        earth: {
          50: '#f9f7f4',
          100: '#f1ede4',
          200: '#e4dac9',
          300: '#d1bfa4',
          400: '#bea17d',
          500: '#a88661',
          600: '#8d6d4f',
          700: '#725743',
          800: '#5f4939',
          900: '#503e32',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd0fd',
          400: '#36b8fa',
          500: '#0c9feb',
          600: '#0180c9',
          700: '#0265a3',
          800: '#065586',
          900: '#0b476f',
        },
        coral: {
          50: '#fff4ed',
          100: '#ffe6d4',
          200: '#ffc9a8',
          300: '#ffa371',
          400: '#fe6f38',
          500: '#fc4911',
          600: '#ed3007',
          700: '#c52008',
          800: '#9c1b0f',
          900: '#7e1910',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-commissioner)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-work-sans)', 'sans-serif'],
        tamil: ['var(--font-mukta-malar)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
