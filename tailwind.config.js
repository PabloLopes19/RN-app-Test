import "tailwindcss-react-native/types.d";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", './src/**/*.tsx'],
  theme: {
    colors: {
      'fd-background': "var(--fd-background)",
      'fd-blue': "#45AAF2",
      'fd-yellow': "#f1c40f",
      'fd-yellow-ghost': "rgba(241, 196, 15, 0.1)",
      'fd-hover': "var(--fd-hover)",
      'fd-grey': "#666",
      'fd-light': "#ddd",
      'fd-description': "#B9B9B9",
      'fd-descriptionDark': "var(--fd-descriptionDark)",
      'fd-card': "var(--fd-card)",
      'fd-primary': "var(--fd-primary)",
      'fd-danger': "#FC5C65",
      'fd-success': "#2ECC71",
      'fd-ghost': "rgba(69, 170, 242, 0.15)",
      'fd-ghost-danger': "rgba(252, 92, 101, 0.15)",
      'fd-ghost-dark': "rgba(0, 0, 0, 0.15)",
      'fd-transparent': "transparent",
      'fd-title': 'var(--fd-title)',
      'fd-border': 'var(--fd-border)',
      'fd-photobg': 'var(--fd-photobg)',
      'fd-divider': 'var(--fd-divider)',
      'fd-inputText': 'var(--fd-inputText)',
      'fd-brighterbg': 'var(--fd-brighterbg)',
      'fd-lightTitle': 'var(--fd-lightTitle)',
      'fd-ice': 'var(--fd-ice)',
      'fd-code': 'var(--fd-code)',
      'fd-toast': 'var(--fd-toast)',
    },
    extend: {},
  },
  plugins: [],
}

