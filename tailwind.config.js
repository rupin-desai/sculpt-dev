/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px", // Change the default `sm` breakpoint
      md: "768px", // Default `md` breakpoint
      lg: "1024px", // Default `lg` breakpoint
      xl: "1280px", // Default `xl` breakpoint
      "2xl": "1536px", // Default `2xl` breakpoint
    },
    extend: {
      fontFamily: {
        sans: ["Redex Pro", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "2",
        12: "3rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      textDecorationThickness: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      colors: {
        "gray-custom": "#5A5A5A",
        "off-gray": "#444444",
        green: {
          900: "#1C554C", // Replace with your custom color code
        },

        black: "#1a1a1a",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      addUtilities(
        {
          ".decoration-thick-1": {
            textDecorationThickness: "1px",
          },
          ".decoration-thick-2": {
            textDecorationThickness: "2px",
          },
          ".decoration-thick-3": {
            textDecorationThickness: "3px",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
