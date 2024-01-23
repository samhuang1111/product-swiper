import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iBuyColor: "#FF1B1B",
      },
      boxShadow: {
        slideButton: "0px 0px 6px #00000029",
        productCard: "0px 0px 20px #00000029",
      },
    },
  },
  plugins: [],
};
export default config;
