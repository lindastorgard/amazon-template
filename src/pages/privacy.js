/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MainContainer from "../components/mainContainer";
import { createMarkup } from "../utils/functions";

const PrivacyPage = () => {
  const { datoCmsPrivacySection } = useStaticQuery(
    graphql`
      query {
        datoCmsPrivacySection {
          title
          pageTitle
          textNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  );

  const { title, pageTitle, textNode } = datoCmsPrivacySection;

  return (
    <Layout>
      <div sx={{ mt: 7 }}>
        <SEO title={title} />
      </div>
      <MainContainer>
        <div sx={{ maxWidth: "800px", margin: "0px auto" }}>
          <div sx={{ color: "highlight" }}>
            <Styled.h2>{pageTitle}</Styled.h2>
          </div>
          <div
            sx={{
              py: 5,
              h1: {
                variant: "markdownText.heading",
              },
              ul: {
                variant: "markdownText.ul",
              },
            }}
            dangerouslySetInnerHTML={createMarkup(
              textNode.childMarkdownRemark.html
            )}
          />
        </div>
      </MainContainer>
    </Layout>
  );
};

export default PrivacyPage;
