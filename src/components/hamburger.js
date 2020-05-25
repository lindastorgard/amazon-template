/** @jsx jsx */
import { jsx } from "theme-ui";

const Hamburger = ({ open, setOpen, landingpage, showBackground }) => {
  const burgerLine = (action) => {
    let animation = {};
    if (open) {
      switch (action) {
        case "rotateCW":
          animation.transform = "rotate(-135deg) translate(-4px, -3px)";
          animation.backgroundColor = "highlight";
          break;
        case "rotateCCW":
          animation.transform = "rotate(135deg) translate(-4px, 3px)";
          animation.backgroundColor = "highlight";
          break;
        default:
      }
    }
    return {
      display: "block",
      padding: 0,
      height: "2px",
      backgroundColor: showBackground || !landingpage ? "text" : "background",
      marginY: 1,
      borderRadius: "3px",
      ":first-of-type": {
        width: "25px",
      },
      ":nth-of-type(3)": {
        width: "25px",
      },
      transition: "ease-in-out 0.3s",
      ...animation,
    };
  };

  return (
    <button
      onClick={() => setOpen(!open)}
      sx={{
        border: "none",
        height: "50px",
        outline: "none",
        width: "50px",
        padding: "0",
        position: "absolute",
        zIndex: "100",
        top: "5px",
        right: "12px",
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <div
        sx={{
          position: "relative",
          height: "50px",
          width: "50px",
        }}
      >
        <div
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span sx={burgerLine("rotateCW")} />
          <span sx={burgerLine("rotateCCW")} />
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
