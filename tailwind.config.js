/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        dark: 'var(--dark)',
        light: 'var(--light)',
        accent: 'var(--accent)'
      },
      animation: {
        'record-spin': 'record-spin 5s linear infinite',
        'glitch': 'glitch-animation 5s infinite linear alternate-reverse',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px var(--primary), 0 0 25px var(--primary)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 25px var(--primary), 0 0 50px var(--primary)',
            transform: 'scale(1.05)'
          }
        }
      },
      backgroundImage: {
        'concrete': "url('https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg')"
      }
    },
  },
  plugins: [],
};