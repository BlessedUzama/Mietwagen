/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bgDark: '#070A11',
          cardDark: '#0F172A',
          borderDark: 'rgba(255, 255, 255, 0.08)',
          bgLight: '#FAFAFC',
          cardLight: '#FFFFFF',
          borderLight: '#E2E8F0',
          accent: '#3B82F6',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          whatsapp: '#10B981',
          whatsappHover: '#059669',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyber': '0 0 30px -5px rgba(59, 130, 246, 0.45)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.45)',
        'glow-whatsapp': '0 0 30px -5px rgba(16, 185, 129, 0.5)',
        'glass-dark': '0 20px 50px rgba(0, 0, 0, 0.5)',
        'glass-light': '0 20px 40px rgba(15, 23, 42, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
