module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      animation: {
        "kenburns-bottom": "kenburns-bottom 5s ease   both"
    },
    keyframes: {
      "kenburns-bottom": {
          "0%": {
              transform: "scale(1) translateY(0)",
              "transform-origin": "50% 84%"
          },
          to: {
              transform: "scale(1.25) translateY(15px)",
              "transform-origin": "bottom"
          }
      }
  }
  }
  },
  plugins: [],
}