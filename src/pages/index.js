/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import PageSection from "../components/pageSection";
import Banner from "../components/banner";
import Ingress from "../components/ingress";
import SingleProductGallery from "../components/singleProductGallery";
import ProductGallery from "../components/productGallery";

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { datoCmsLandingPage, datoCmsColorMode } = useStaticQuery(
    graphql`
      query {
        datoCmsColorMode {
          light
          raspberrypie
          oceancalm
        }
        datoCmsColorMode {
          light
          raspberrypie
          oceancalm
        }
        datoCmsLandingPage {
          productBlockTitle
          landinpageSection {
            id
            blockDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            buttonLink {
              ... on DatoCmsProductsPage {
                id
                title
                slug
              }
              ... on DatoCmsContactPage {
                id
                title
                slug
              }
              ... on DatoCmsAboutPage {
                id
                title
                slug
              }
            }
            externalBtnLink
            externalButtonLinkText
            blockTitle
            blockImage {
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
          ingress
          bannerExternalLink
          bannerExternalLinkTitle
          bannerLink {
            ... on DatoCmsProductsPage {
              id
              slug
              title
            }
            ... on DatoCmsContactPage {
              id
              slug
              title
            }
            ... on DatoCmsAboutPage {
              id
              slug
              title
            }
          }
          bannerText
          parallaxImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          productGallery {
            id
            productDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            productTitle
            productImage {
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    if (datoCmsColorMode.oceancalm) {
      setColorMode("oceanCalm");
    } else if (datoCmsColorMode.raspberrypie) {
      setColorMode("raspberryPie");
    } else {
      setColorMode("light");
    }
  }, [datoCmsColorMode.oceancalm, datoCmsColorMode.raspberrypie, setColorMode]);

  const {
    productBlockTitle,
    landinpageSection,
    ingress,
    parallaxImage,
    bannerText,
    bannerExternalLink,
    bannerExternalLinkTitle,
    bannerLink,
    productGallery,
  } = datoCmsLandingPage;
  return (
    <Layout sx={{ mt: 0 }}>
      <SEO title="Home" />
      <HeroSection />
      <main>
        <section sx={{ my: 6 }}>
          <Ingress>{ingress}</Ingress>
          <aside>
            <Banner
              image={parallaxImage.fluid}
              text={bannerText}
              bannerExternalLink={bannerExternalLink}
              bannerLink={bannerLink}
              bannerExternalLinkTitle={bannerExternalLinkTitle}
            />
          </aside>
          <section>
            {productGallery.length > 1 ? (
              <ProductGallery
                title={productBlockTitle}
                products={productGallery}
              />
            ) : (
              <SingleProductGallery
                title={productBlockTitle}
                products={productGallery}
              />
            )}
          </section>
          {landinpageSection.map((node) => {
            return <PageSection key={node.id} section={node} />;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
