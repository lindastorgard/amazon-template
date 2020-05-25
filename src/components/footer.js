/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Hr from "./hr";
import { createMarkup } from "../utils/functions";

const Footer = () => {
  const { datoCmsFooter, datoCmsPrivacySection } = useStaticQuery(
    graphql`
      query {
        datoCmsFooter {
          contactDetailsHeading
          companyName
          adressNode {
            childMarkdownRemark {
              html
            }
          }
          email
          phoneNumber
          socialMediaHeading
          socialMediaLinks {
            title
            urlLink
          }
          privacyHeading
          privacyLink
          copyright
        }
        datoCmsPrivacySection {
          slug
        }
      }
    `
  );

  const {
    contactDetailsHeading,
    companyName,
    adressNode,
    email,
    phoneNumber,
    socialMediaHeading,
    socialMediaLinks,
    privacyHeading,
    privacyLink,
    copyright,
  } = datoCmsFooter;

  const { slug } = datoCmsPrivacySection;

  const style = {
    heading: {
      color: "background",
      mb: 1,
      mt: 3,
    },
    linkStyle: {
      display: "block",
      fontSize: 0,
      textDecoration: "none",
      fontFamily: "body",
      color: "background",
      p: {
        display: "inline-block",
        mx: 0,
        my: 0,
        "::after": {
          content: '" "',
          display: "block",
          width: "0%",
          borderBottom: "1px solid",
          borderColor: "background",
          transition: "0.2s",
          borderRadius: "2px",
          mr: "auto",
        },
        ":hover": {
          "::after": {
            width: "100%",
          },
        },
        ":active": {
          "::after": {
            width: "100%",
          },
        },
        "&.active": {
          "::after": {
            width: "100%",
          },
        },
      },
    },
    flex: {
      flex: "1",
      mx: [0, 3, 5],
    },
    hr: {
      mb: 1,
    },
    p: {
      color: "background",
      fontSize: 0,
      m: 0,
      mb: 1,
    },
  };

  return (
    <footer
      sx={{
        backgroundColor: "text",
        pb: 2,
        px: [3, "0px", null],
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row", null],
          justifyContent: "space-between",
        }}
      >
        <div sx={style.flex}>
          <Styled.h4 sx={style.heading}>{contactDetailsHeading}</Styled.h4>
          <div sx={style.hr}>
            <Hr />
          </div>
          <p sx={style.p}>{companyName}</p>
          <div
            sx={{
              p: {
                variant: "markdownText.p",
                color: "background",
                fontSize: 0,
              },
            }}
            dangerouslySetInnerHTML={createMarkup(
              adressNode.childMarkdownRemark.html
            )}
          />
          <div sx={{ pt: 2 }}>
            <a href={`tel:${phoneNumber}`} sx={style.linkStyle}>
              <p>{phoneNumber}</p>
            </a>
            <a href={`mailto:${email}`} sx={style.linkStyle}>
              <p>{email}</p>
            </a>
          </div>
        </div>
        <div sx={style.flex}>
          <Styled.h4 sx={style.heading}>{socialMediaHeading}</Styled.h4>
          <div sx={style.hr}>
            <Hr />
          </div>
          {socialMediaLinks.map(({ title, urlLink }, index) => (
            <a
              key={index}
              href={urlLink}
              target="_blank"
              rel="noreferrer noopener"
              sx={style.linkStyle}
            >
              <p>{title}</p>
            </a>
          ))}
        </div>
        <div sx={style.flex}>
          <Styled.h4 sx={style.heading}>{privacyHeading}</Styled.h4>
          <div sx={style.hr}>
            <Hr />
          </div>
          <Link to={slug} aria-label={`Link to ${slug}`} sx={style.linkStyle}>
            <p>{privacyLink}</p>
          </Link>
        </div>
      </div>
      <div sx={{ mx: [0, 3, 5] }}>
        <p
          sx={{
            color: "background",
            fontSize: 0,
            mt: 4,
            mb: 0,
          }}
        >
          © {new Date().getFullYear()} {copyright}.
          <a
            href="https://www.snackbarstudios.se/"
            sx={{
              color: "background",
              fontSize: 0,
              textDecoration: "none",
            }}
          >
            &nbsp;Powered by Snackbar Studios
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
