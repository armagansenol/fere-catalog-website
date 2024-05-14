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
    },
  },
  plugins: [],
}
export default config
