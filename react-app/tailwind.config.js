/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#cdd9ff",
        "surface": "#faf8ff",
        "inverse-surface": "#1c2f59",
        "on-primary-fixed": "#2e1500",
        "tertiary-fixed-dim": "#bbc5eb",
        "on-secondary-container": "#1b218f",
        "on-tertiary": "#ffffff",
        "secondary-container": "#8991fe",
        "secondary": "#4b53bc",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e1e7ff",
        "on-secondary": "#ffffff",
        "on-background": "#021943",
        "error": "#ba1a1a",
        "secondary-fixed": "#e0e0ff",
        "on-primary": "#ffffff",
        "surface-container-highest": "#d9e2ff",
        "on-tertiary-fixed": "#0f1a37",
        "secondary-fixed-dim": "#bfc2ff",
        "error-container": "#ffdad6",
        "inverse-primary": "#ffb77a",
        "primary-fixed": "#ffdcc2",
        "surface-bright": "#faf8ff",
        "primary-container": "#ff7e54",
        "outline": "#887364",
        "on-surface-variant": "#554336",
        "on-secondary-fixed-variant": "#3239a3",
        "inverse-on-surface": "#eef0ff",
        "on-secondary-fixed": "#00006e",
        "on-tertiary-container": "#394362",
        "on-surface": "#021943",
        "tertiary": "#535d7e",
        "on-primary-container": "#693800",
        "primary-fixed-dim": "#ffb77a",
        "outline-variant": "#dbc2b0",
        "primary": "#8f4e00",
        "background": "#faf8ff",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "surface-container-low": "#f2f3ff",
        "tertiary-container": "#a6b1d5",
        "on-tertiary-fixed-variant": "#3b4665",
        "tertiary-fixed": "#dae1ff",
        "on-primary-fixed-variant": "#6d3a00",
        "surface-container": "#eaedff",
        "surface-tint": "#8f4e00",
        "surface-variant": "#d9e2ff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Be Vietnam Pro", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

