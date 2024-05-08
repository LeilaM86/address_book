/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6b7280",

          secondary: "#9ca3af",

          accent: "#f3f4f6",

          neutral: "#f3f4f6",

          "base-100": "#d1d5db",

          info: "#a5b4fc",

          success: "#4ade80",

          warning: "#fde047",

          error: "#991b1b",
        },
      },
    ],
  },
};
