import type { Config } from "tailwindcss"
import { breakpoints } from "./lib/utils"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: `${breakpoints.mobile}px`,
        // => @media (min-width: 800px) { ... }
        desktop: `${breakpoints.tablet}px`,
        // => @media (min-width: 1024px) { ... }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "animate-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "animate-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s var(--ease-out-expo)",
        "accordion-up": "accordion-up 0.4s var(--ease-out-expo)",
        "animate-in": "animate-in 0.4s var(--ease-out-expo)",
        "animate-out": "animate-out 0.4s var(--ease-out-expo)",
      },
    },
  },
  plugins: [],
}
export default config
