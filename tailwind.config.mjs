/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-container': '#001b44',
        'secondary': '#735c00',
        'secondary-container': '#fed65b',
        'primary': '#00020a',
        'on-surface-variant': '#44474f',
        'surface': '#f8f9fa',
        'surface-container-low': '#f3f4f5',
        'background': '#ffffff',
        'on-background': '#191c1d',
        'outline-variant': '#e1e3e4',
      },
      spacing: {
        'container-max': '1280px',
        'margin-desktop': '80px',
        'margin-mobile': '24px',
        'section-py': '120px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Sora', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
