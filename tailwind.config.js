/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // molto importante!
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: withOpacity('--text'),
        background: withOpacity('--background'),
        primary: withOpacity('--primary'),
        secondary: withOpacity('--secondary'),
        accent: withOpacity('--accent'),
      },
    },
  },
  plugins: [],
};
