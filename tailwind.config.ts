import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#2A254B", 
        primary: "#4E4D93", 
        lightGrey: "#F9F9F9", 
        borderGray: "#EBE8F4",
        white: "#FFFFFF", 
        borderDark: "#CAC6DA", 
      },
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"], 
        satoshi: ["'Satoshi'", "sans-serif"],    
      },
    },
  },
  plugins: [],
} satisfies Config;
