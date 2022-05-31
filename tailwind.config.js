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
      "fontSize": {
        "base": "1rem",
        "4xl": "1.75rem"
      },
      "fontFamily": {
        "paytone": "'Paytone One', sans-serif",
        "montserrat": 'Montserrat, sans-serif',
        "gothic": "'Gothic A1', sans-serif"
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
      },
      screens: {
        'sm': '375px',
        'md': '720px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    },
  },
  plugins: [],
}
