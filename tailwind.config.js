module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}", "./public/app.js"],
  theme: {
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        body: ["Be Vietnam Pro"],
        pepp: ["Ubuntu"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/illustration-intro.svg')",
        "simplify-pattern-mobile":
          "url('images/bg-simplify-section-mobile.svg')",
        "simplify-pattern-desktop":
          "url('images/bg-simplify-section-desktop.svg')",
        "simplify-pattern-tablet":
          "url('images/bg-simplify-section-tablet.svg')",
        "simplify-pattern-curry": "url('images/noodles.jpg')",
      },
    },
  },
  plugins: [],
};
