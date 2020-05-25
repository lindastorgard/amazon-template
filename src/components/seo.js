/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, link }) {
  const { datoCmsSite } = useStaticQuery(
    graphql`
      query {
        datoCmsSite {
          globalSeo {
            facebookPageUrl
            siteName
            titleSuffix
            twitterAccount
            fallbackSeo {
              description
              title
              twitterCard
              image {
                sizes {
                  src
                  width
                  height
                }
              }
            }
          }
          faviconMetaTags {
            tags
          }
        }
      }
    `
  );

  const { globalSeo, faviconMetaTags } = datoCmsSite;

  const links = faviconMetaTags.tags.map((link) => {
    return link.attributes;
  });

  const metaDescription = description || globalSeo.fallbackSeo.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      description={globalSeo.fallbackSeo.description}
      title={title}
      titleTemplate={`%s | ${globalSeo.siteName}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: globalSeo.fallbackSeo.image.sizes.src,
        },
        {
          name: `og:image:width`,
          content: globalSeo.fallbackSeo.image.sizes.width,
        },
        {
          name: `og:image:height`,
          content: globalSeo.fallbackSeo.image.sizes.height,
        },
        {
          name: `twitter:card`,
          content: globalSeo.fallbackSeo.twitterCard,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: globalSeo.fallbackSeo.image.sizes.src,
        },
        {
          name: `twitter:image:width`,
          content: globalSeo.fallbackSeo.image.sizes.width,
        },
        {
          name: `twitter:image:height`,
          content: globalSeo.fallbackSeo.image.sizes.height,
        },
      ].concat(meta)}
      link={links}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
