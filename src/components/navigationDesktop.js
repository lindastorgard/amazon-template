/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationLink from "./navigationLink";
import Logo from "./logo";
import { useState, useEffect } from "react";
import { useLocation } from "@reach/router";

const NavigationDesktop = () => {
  const location = useLocation();
  const [landingpage, setLandingPage] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about/") {
      setLandingPage(true);
    } else {
      setLandingPage(false);
    }
  }, []);

  const pageScroll = function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 30) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScroll);
    return () => window.removeEventListener("scroll", pageScroll);
  }, []);

  return (
    <div
      sx={{
        display: ["none", "flex"],
        position: "fixed",
        zIndex: 2,
        backgroundColor:
          showBackground || !landingpage ? "background" : "transparent",
        transition: showBackground
          ? ".6s cubic-bezier(.5,0,.5,1)"
          : ".6s cubic-bezier(.5,0,.5,1)",
        width: "100%",
        height: "60px",
        px: 4,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div sx={{ display: "flex" }}>
        <Logo />
      </div>

      <div>
        <ul
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <NavigationLink
            href={`/about/`}
            landingpage={landingpage}
            showBackground={showBackground}
          >
            About
          </NavigationLink>

          <NavigationLink
            href={`/products/`}
            landingpage={landingpage}
            showBackground={showBackground}
          >
            Products
          </NavigationLink>

          <NavigationLink
            href={`/contact/`}
            landingpage={landingpage}
            showBackground={showBackground}
          >
            Contact
          </NavigationLink>
        </ul>
      </div>
    </div>
  );
};

export default NavigationDesktop;
