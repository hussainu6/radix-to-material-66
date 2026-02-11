/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--md-primary)",
        "on-primary": "var(--md-on-primary)",
        "primary-container": "var(--md-primary-container)",
        "on-primary-container": "var(--md-on-primary-container)",
        secondary: "var(--md-secondary)",
        "on-secondary": "var(--md-on-secondary)",
        "secondary-container": "var(--md-secondary-container)",
        "on-secondary-container": "var(--md-on-secondary-container)",
        tertiary: "var(--md-tertiary)",
        "on-tertiary": "var(--md-on-tertiary)",
        surface: "var(--md-surface)",
        "on-surface": "var(--md-on-surface)",
        "surface-variant": "var(--md-surface-variant)",
        "on-surface-variant": "var(--md-on-surface-variant)",
        outline: "var(--md-outline)",
        error: "var(--md-error)",
        "on-error": "var(--md-on-error)",
      },
    },
  },
  plugins: [],
};
