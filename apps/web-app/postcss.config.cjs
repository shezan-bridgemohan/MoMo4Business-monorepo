module.exports = {
  plugins: [
    require("postcss-import"), // This resolves @import "@shezan-test/..." perfectly
    require("@tailwindcss/postcss"),
  ],
};
