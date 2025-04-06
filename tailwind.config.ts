import type { Config } from "tailwindcss";
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#ddb340",
          "primary-content": "#eae2d1",
          secondary: "#369475",
          "secondary-content": "#ffffff",
          accent: "#5765F4",
          "accent-content": "#F3B8E1",
          neutral: "#0a1219",
          "neutral-content": "#ffffff",
          "base-100": "#0a1219",
          "base-200": "#0f1a24",
          "base-300": "#18222c",
          "base-content": "#eae2d1",
          info: "#5765F4",
          success: "#369475",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "6px",
          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      fontFamily: {
        sans: ['"Lexend Deca"', ..._fontFamily.sans],
        pixel: ['"Pixelify Sans"', 'monospace'],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
} satisfies Config;

export default config;
