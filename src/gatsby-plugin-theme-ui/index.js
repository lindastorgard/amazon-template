export default {
  initialColorModeName: "light",
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#FDF6EE",
    highlight: "#B77C16",
    modes: {
      raspberryPie: {
        text: "#000",
        background: "#fff",
        primary: "#F2EDEE",
        highlight: "#63323A",
      },
      oceanCalm: {
        text: "#000",
        background: "#fff",
        primary: "#E8F8FF",
        highlight: "#1B5976",
      },
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  fontSizes: [12, 16, 24, 36, 48, 64],
  fontWeights: {
    body: 200,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  useBodyStyles: "true",
  useBorderBox: "true",
  // variants can use custom, user-defined names
  markdownText: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      color: "text",
      fontSize: [3],
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1],
    },
    p: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1],
      margin: 0,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    a: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 1,
      color: "highlight",
      ":hover": {
        color: "primary",
      },
    },
    ul: {
      pl: 2,
      li: {
        margin: 0,
      },
    },
  },

  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      margin: 0,
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: [4, 5],
      margin: 0,
      textTransform: "capitalize",
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "200",
      lineHeight: "heading",
      fontSize: 3,
      margin: 0,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "200",
      fontSize: 2,
      margin: 0,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "body",
      fontSize: 1,
      color: "background",
      margin: 0,
    },
    a: {
      display: "inline-block",
      maxWidth: "170px",
      position: "relative",
      textDecoration: "none",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 1,
      color: "text",
      textTransform: "capitalize",
      paddingX: "10px",
      textAlign: "center",
      zIndex: 2,
      "::after": {
        content: '" "',
        position: "absolute",
        zIndex: -1,
        display: "block",
        width: "100%",
        height: "2px",
        backgroundColor: "highlight",
        transition: "0.2s",
        ml: "-10px",
        marginTop: "5px",
      },
      ":hover, :active": {
        color: "background",
        "::after": {
          height: "40px",
          mt: "-33px",
        },
      },
    },
  },
};
