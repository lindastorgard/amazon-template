/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Ingress = ({ children }) => {
  return (
    <div
      sx={{
        textAlign: "center",
        maxWidth: ["400px", "600px", "800px"],
        m: "0 auto",
        mb: 6,
        p: [2],
        fontSize: [1, 2, null],
      }}
    >
      {children}
    </div>
  );
};

export default Ingress;

Ingress.propTypes = {
  children: PropTypes.node.isRequired,
};
