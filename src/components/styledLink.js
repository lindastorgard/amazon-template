/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const StyledLink = ({ children, href, open }) => {
  return (
    <Link
      to={href}
      aria-label={`Link to ${href}`}
      activeClassName="active"
      sx={{
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
      }}
    >
      {children}
    </Link>
  );
};

StyledLink.defaultProps = {
  open: false,
};

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default StyledLink;
