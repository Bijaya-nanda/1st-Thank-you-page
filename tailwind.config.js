/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
      },
      colors: {
        indigo: {
          500: '#6C63FF',
          600: '#5B52E6',
        },
        purple: {
          400: '#A78BFA',
          500: '#9575FA',
        },
        gray: {
          100: '#F3F4F6',
          600: '#4B5563',
          900: '#111827',
        }
      }
    },
  },
  plugins: [],
};