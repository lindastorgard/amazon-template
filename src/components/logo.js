/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "../components/image";

const Logo = () => {
  const { datoCmsLogo } = useStaticQuery(
    graphql`
      query {
        datoCmsLogo {
          brandLogo {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
  return (
    <Link to="/">
      <div sx={{ width: "80px", maxHeight: "70px", height: "70px", py: 2 }}>
        <Image
          image={datoCmsLogo.brandLogo.fluid}
          alt={datoCmsLogo.brandLogo.alt}
          style={{ maxHeight: "100%" }}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
