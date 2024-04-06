/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // Extra small devices (phones)
        'sm': '640px',   // Small devices (phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (laptops/desktops)
        'xl': '1280px',  // Extra large devices (large laptops/desktops)
        '2xl': '1536px', // Extra extra large devices (larger laptops/desktops)
        // Add more custom screen sizes if needed
      },
    },
  },
  plugins: [],
}