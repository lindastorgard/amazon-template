/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import { useState, useEffect } from "react";
import DropDownMobile from "./dropdownMobile";
import NavigationLink from "./navigationLink";
import Logo from "./logo";
import { useLocation } from "@reach/router";

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
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
        height: "60px",
        display: ["flex", "none", null],
        justifyContent: "space-between",
        alignItems: "center",
        a: {
          ml: "24px",
        },
        backgroundColor:
          showBackground || !landingpage ? "background" : "transparent",
        transition: showBackground
          ? ".6s cubic-bezier(.5,0,.5,1)"
          : ".6s cubic-bezier(.5,0,.5,1)",
      }}
    >
      <Logo />
      <Hamburger
        setOpen={setOpen}
        open={open}
        landingpage={landingpage}
        showBackground={showBackground}
      />

      <DropDownMobile open={open}>
        <ul>
          <NavigationLink open={open} href={`/about/`}>
            About
          </NavigationLink>
          <NavigationLink open={open} href={`/products/`}>
            Products
          </NavigationLink>

          <NavigationLink open={open} href={`/contact/`}>
            Contact
          </NavigationLink>
        </ul>
      </DropDownMobile>
    </div>
  );
};

export default NavigationMobile;
