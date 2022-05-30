module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "blue": {
          "850": "#2a00a0"
        }
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.3125rem",
        "default": "0.4375rem",
        "lg": "2.1875rem",
        "xl": "2.8271484375rem",
        "2xl": "5.0888671875rem",
        "full": "9999px"
      }
    },
  },
  plugins: [],
}
