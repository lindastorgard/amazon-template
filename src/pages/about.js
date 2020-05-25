/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from "../components/pageSection";
import Banner from "../components/banner";

const About = () => {
  const { datoCmsAboutPage } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutPage {
          title
          pageTitle
          ingressText
          bannerImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
            alt
          }

          aboutSection {
            blockDescription
            blockDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            blockTitle
            blockImage {
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
            externalButtonLinkText
            externalBtnLink
            buttonLink {
              ... on DatoCmsProductsPage {
                id
                slug
                title
              }
              ... on DatoCmsContactPage {
                id
                email
                slug
                title
              }
              ... on DatoCmsAboutPage {
                id
                slug
                title
              }
            }
          }
        }
      }
    `
  );

  const {
    title,
    pageTitle,
    bannerImage,
    aboutSection,
    ingressText,
  } = datoCmsAboutPage;

  return (
    <Layout>
      <SEO title={title} />
      <main>
        <Banner image={bannerImage.fluid} />
        <section
          sx={{
            textAlign: "center",
            pt: 5,
            pb: 4,
            px: 4,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <h2
            sx={{
              fontSize: 3,
              fontFamily: "heading",
              fontWeight: "body",
              color: "text",
              mb: 4,
              display: "block",
            }}
          >
            {pageTitle}
          </h2>
          <p>{ingressText}</p>
        </section>
        <section sx={{ py: 4 }}>
          {aboutSection.map((section, index) => (
            <PageSection key={index} section={section} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default About;
