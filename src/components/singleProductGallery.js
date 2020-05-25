/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "./image";
import { createMarkup } from "../utils/functions";
import { Fragment } from "react";

const SingleProductGallery = ({ title, products }) => {
  return (
    <Fragment>
      <Styled.h2 sx={{ textAlign: "center", mt: 6, mb: "0px" }}>
        {title}
      </Styled.h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          paddingX: [2, 2, 5],
          paddingY: [4, 4, 5],
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          sx={{
            flex: "1",
            padding: [2, 4, 5],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Styled.h3>{products[0].productTitle}</Styled.h3>
          <div
            dangerouslySetInnerHTML={createMarkup(
              products[0].productDescriptionNode.childMarkdownRemark.html
            )}
          />
          <div sx={{ pt: 2 }}>
            <Styled.a href="/products">View product</Styled.a>
          </div>
        </div>
        <div sx={{ flex: "1", padding: [2, 4, 5] }}>
          <Image
            alt={products[0].productImage.alt}
            image={products[0].productImage.fluid}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProductGallery;
