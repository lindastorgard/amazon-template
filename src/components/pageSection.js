/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import StyledLink from "./styledLink";
import Image from "./image";
import { createMarkup } from "../utils/functions";

const PageSection = ({ section }) => {
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        backgroundColor: "primary",
        ":nth-of-type(2)": {
          flexDirection: [null, "row-reverse"],
          backgroundColor: ["background", "primary"],
        },
      }}
    >
      <div
        sx={{
          flex: "1",
          div: { height: "100%", maxHeight: ["500px", "750px", "600px"] },
        }}
      >
        <Image image={section.blockImage.fluid} alt={section.blockImage.alt} />
      </div>
      <div sx={{ flex: "1" }}>
        <div
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: [4, 6],
            py: [6],
          }}
        >
          <Styled.h2 sx={{ color: "text", mb: 3 }}>
            {section.blockTitle}
          </Styled.h2>
          <div
            sx={{ m: 0 }}
            dangerouslySetInnerHTML={createMarkup(
              section.blockDescriptionNode.childMarkdownRemark.html
            )}
          />
          {section.buttonLink && (
            <div
              sx={{
                py: 2,
              }}
            >
              <StyledLink href={section.buttonLink.slug}>
                {section.buttonLink.slug}
              </StyledLink>
            </div>
          )}
          {section.externalBtnLink?.length > 0 && (
            <div
              sx={{
                py: 2,
              }}
            >
              <Styled.a
                href={section.externalBtnLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {section.externalButtonLinkText}
              </Styled.a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PageSection;
