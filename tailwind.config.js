module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-sora)", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        retro: {
          black: "#000000",
          navy: "#27272a",
          orange: "#ffffff",
          gray: "#a1a1aa",
        }
      }
    },
  },
  plugins: [],
}

