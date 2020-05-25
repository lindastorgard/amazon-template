/** @jsx jsx */
import { jsx } from "theme-ui";

const StyledButton = () => {
  return (
    <div
      sx={{
        "a": {

        
        // display: ["block", null, "inline-block"],
        display: "inline-block",
        // maxWidth: ["100%", "170px", null],
        maxWidth: "170px",
        position: "relative",
        textDecoration: "none",
        fontFamily: "body",
        fontWeight: "body",
        fontSize: 1,
        color: "text",
        // color: ["background", null, "text"],
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
          // height: ["40px", null, "2px"],
          backgroundColor: "highlight",
          transition: "0.2s",
          ml: "-10px",
          marginTop: "5px",
          // marginTop: ["-33px", null, "5px"],
        },
        ":hover": {
          color: "background",
          "::after": {
            height: "40px",
            mt: "-33px",
            // height: [0, null, "40px"],
            // mt: [0, null, "-33px"],
          },
        },
      }}}
    />
  );
};

export default StyledButton;
