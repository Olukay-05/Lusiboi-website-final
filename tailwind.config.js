/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": ["Libre Baskerville", "serif"],
      },
      screens: {
        "3xl-custom": "1280px", // Custom breakpoint for 1300px
      },
    },
  },

  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "custom-gradient":
//           "repeating-linear-gradient(0deg, hsla(103, 11%, 32%, 0.09) 0px, hsla(103, 11%, 32%, 0.09) 1px, transparent 1px, transparent 11px), repeating-linear-gradient(90deg, hsla(103, 11%, 32%, 0.09) 0px, hsla(103, 11%, 32%, 0.09) 1px, transparent 1px, transparent 11px), linear-gradient(90deg, hsl(317, 13%, 6%), hsl(317, 13%, 6%))",
//       },
//     },
//   },
//   plugins: [],
// };
