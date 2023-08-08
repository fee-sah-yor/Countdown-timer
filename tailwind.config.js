/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(345, 95%, 68%)",
        "grayish-blue": " hsl(237, 18%, 59%)",
        /* ### Neutral */
        "white": " hsl(0, 0%, 100%)",
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "very-very-dark-blue": "hsl(234, 17 %, 12 %)"
           }
    },
   
  },
plugins: [],
}
//     primary: 'hsl(var(--color-primary) / <alpha-value>)',
// secondary: 'hsl(var(--color-secondary) / <alpha-value>)',