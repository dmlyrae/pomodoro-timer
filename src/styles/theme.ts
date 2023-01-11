export const baseTheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#4f4f4f",
    success: "#4caf50",
    danger: "#f44336 ",
    pomodoro: "#f44336 ",
    green: "#4aec8c",
    lightBackground: "#E5E4E8",
    lightColor: "#19191B",
    darkBackground: "#30384b",
    darkColor: "#e5e4e8",
  },

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
    defaultButton: { size: "2em" },
    icons: { normal: "2em", small: "1em", large: "6em" },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};
