import type { Config } from "tailwindcss"

// In Tailwind v4, ALL theme config lives in globals.css via @theme {}
// This file only needs content paths
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}

export default config
