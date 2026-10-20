/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#EE6F23', // Naranja corporativo ObraControl
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#EE6F23',
        },
        dark: {
          800: '#2D3034', // Gris oscuro corporativo
          900: '#212427',
          950: '#191B1D',
          DEFAULT: '#2D3034',
        },
        surface: {
          light: '#F5F6F7', // Gris claro de fondo
          card: '#FFFFFF',
        },
        status: {
          completed: '#10B981', // Verde
          pending: '#F59E0B',   // Amarillo
          alert: '#EF4444',     // Rojo
          progress: '#3B82F6',  // Azul
          review: '#8B5CF6',    // Púrpura
        }
      },
    },
  },
  plugins: [],
}
