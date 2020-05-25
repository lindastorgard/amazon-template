/** @jsx jsx */
import { jsx } from "theme-ui";

const Arrow = ({ width, fill }) => {
  return (
    <div
      sx={{
        width: width,
        cursor: "pointer",
        svg: {
          path: {
            fill: fill,
          },
        },
      }}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 51.891"
      >
        <path d="M100-.004L49.995 51.891 0-.004z"></path>
      </svg>
    </div>
  );
};

export default Arrow;