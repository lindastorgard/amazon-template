/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
import Outlinebutton from "../components/outlineButton";

const Banner = ({
  image,
  text,
  bannerExternalLink,
  bannerExternalLinkTitle,
  bannerLink,
}) => {
  return (
    <BackgroundImage
      fluid={image}
      backgroundColor={`#F2EDEE`}
      style={{
        height: "400px",
      }}
    >
      <div
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "green",
          position: "absolute",
          top: 0,
          left: 0,
          background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          m: "auto",
          p: 2,
        }}
      >
        <p
          sx={{
            fontFamily: "body",
            lineHeight: "heading",
            fontWeight: "200",
            paddingX: [2, 2, 5],
            fontSize: [2, 3],
          }}
        >
          {text}
        </p>
        {bannerLink && (
          <div
            sx={{
              a: {
                color: "background",
                textTransform: "capitalize",
              },
            }}
          >
            <div>
              <Outlinebutton href={bannerLink.slug} text={bannerLink.slug} />
            </div>
          </div>
        )}
        {bannerExternalLink?.length > 0 && (
          <div>
            <Outlinebutton
              href={bannerExternalLink}
              text={bannerExternalLinkTitle}
            />
          </div>
        )}
      </div>
    </BackgroundImage>
  );
};

export default Banner;

Banner.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string,
  bannerExternalLink: PropTypes.string,
  bannerExternalLinkTitle: PropTypes.string,
  bannerLink: PropTypes.object,
};
