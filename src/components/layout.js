/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
      }
    }
  `);

  return (
    <Fragment>
      <div
        sx={{
          position: "relative",
          minHeight: "100vh",
          main: {
            pb: ["550px", "330px"],
          },
          footer: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: ["550px", "330px"],
          },
        }}
      >
        <div>
          <Header siteTitle={data.datoCmsSite.globalSeo.siteName} />
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
