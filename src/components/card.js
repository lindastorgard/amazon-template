/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import DesktopSlider from "./desktopSlider";
import MobileSlider from "./mobileSlider";

const Card = ({ section }) => {
  console.log(section);
  return (
    <Fragment>
      {section.map(
        ({
          heading,
          price,
          descriptionNode,
          specificationTitle,
          specificationListNode,
          externalButtonText,
          externalButtonLink,
          imageGallery,
        }) => (
          <Fragment key={section.id}>
            <DesktopSlider
              heading={heading}
              price={price}
              description={descriptionNode}
              specificationTitle={specificationTitle}
              specificationListNode={specificationListNode}
              externalButtonText={externalButtonText}
              externalButtonLink={externalButtonLink}
              descriptionNode={descriptionNode}
              imageGallery={imageGallery}
            />
            <MobileSlider
              heading={heading}
              price={price}
              description={descriptionNode}
              specificationTitle={specificationTitle}
              specificationListNode={specificationListNode}
              externalButtonText={externalButtonText}
              externalButtonLink={externalButtonLink}
              descriptionNode={descriptionNode}
              imageGallery={imageGallery}
            />
          </Fragment>
        )
      )}
    </Fragment>
  );
};

export default Card;
