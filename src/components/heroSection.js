/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import ImageSlider from "./imageSlider";

const HeroSection = () => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          heroLink {
            ... on DatoCmsProductsPage {
              id
              slug
            }
            ... on DatoCmsContactPage {
              id
              slug
            }
            ... on DatoCmsAboutPage {
              id
              slug
            }
          }
          heroTitle
          heroDescription
          heroImageSlider {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
  const {
    heroLink,
    heroTitle,
    heroDescription,
    heroImageSlider,
  } = datoCmsHeroSection;
  return (
    <div
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: ["column-reverse", null, "row"],
      }}
    >
      <div sx={{ flex: "2", backgroundColor: "primary" }}>
        <div
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: ["flex-end", "center", "flex-end"],
            height: "100%",
          }}
        >
          <Styled.h1
            sx={{ color: "highlight", lineHeight: 1.2, mb: ["0px", 3] }}
          >
            {heroTitle}
          </Styled.h1>
          <p
            sx={{
              maxWidth: "500px",
              color: "highlight",
              fontSize: [2, 3],
              fontWeight: "200",
              lineHeight: 1.2,
            }}
          >
            {heroDescription}
          </p>
          <div
            sx={{
              a: {
                color: "highlight",
              },
            }}
          >
            <Styled.a href={heroLink.slug}>{heroLink.slug}</Styled.a>
          </div>
        </div>
      </div>
      <div
        sx={{
          flex: "3",
          position: "relative",
          backgroundColor: "primary",
        }}
      >
        <ImageSlider slides={heroImageSlider} />
      </div>
    </div>
  );
};

export default HeroSection;
