/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      outlineWidth: {
        10: '10px',
      }
    },
    
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "nord",
      "dark",
      "forest",
      "night",
      "black",
    ],
    base: true,
  },
}