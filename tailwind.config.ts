import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        menu: ["var(--font-menu)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        shade: "rgb(0 0 0/25%)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          background: "#F0EAEC",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#9B8E92",
        },
        accent: {
          DEFAULT: "#9E002F",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#F8EAEE",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        clamp(value) {
          // load font sizes from theme
          const sizes = theme("fontSize");

          // parse the value passed in from class name
          // split it by "-" and compare pieces to fontSize values
          const split = value
            .split("-")
            .map((v) => (sizes[v] ? sizes[v]["0"] : v));

          // return a clamped font-size
          return {
            fontSize: `clamp(${split[0]}, ${split[1]}, ${split[2]})`,
          };
        },
      });
    }),
  ],
} satisfies Config;

export default config;
