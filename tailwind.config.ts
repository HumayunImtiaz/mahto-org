import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { paper: "#FAF8F4", ink: "#14213D", accent: "#0E7C66", soft: "#E3F2EE", line: "#E6E2D9", mut: "#5B6478" },
    fontFamily: { serif: ["Newsreader", "Georgia", "serif"], sans: ["Instrument Sans", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
