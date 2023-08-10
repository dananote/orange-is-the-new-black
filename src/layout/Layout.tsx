import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Nav from "../components/Nav";
import LayoutPC from "./LayoutPC";
import LayoutMobile from "./LayoutMobile";
import { NextBtn, SoundImageWrapper } from "./LayoutStyle";
import lpImage from "../asset/common/soundtrack.png";

const Layout = () => {
  const isDesktop = useMediaQuery({ query: "(min-width:800px)" });
  const isMobile = useMediaQuery({ query: "(max-width:799px)" });
  const location = useLocation();
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleMenu = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      {showNav && <Nav isMobile={isMobile} setShowNav={setShowNav} />}
      <Outlet />
      {isDesktop && (
        <LayoutPC
          handleMenu={handleMenu}
          showNav={showNav}
          location={location.pathname}
        />
      )}
      {isMobile && (
        <LayoutMobile
          isMobile={isMobile}
          showNav={showNav}
          handleMenu={handleMenu}
        />
      )}
      <NextBtn isMobile={isMobile} />
      <SoundImageWrapper>
        <img src={lpImage} alt="Lp이미지" />
      </SoundImageWrapper>
    </>
  );
};

export default Layout;
