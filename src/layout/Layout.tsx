import React, { useState } from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import LayoutPC from "./LayoutPC";
import LayoutMobile from "./LayoutMobile";
import { NextBtn, SoundImageWrapper } from "./LayoutStyle";
import lpImage from "../asset/common/soundtrack.png";
import { PageData } from "../mock/menuList";
import { LayoutProps } from "../mock/type";
import noise from "../asset/common/noise.gif";

const Layout: React.FC<LayoutProps> = ({ isDesktop, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleMenu = () => {
    setShowNav((prev) => !prev);
  };

  const handleNext = () => {
    const currentPage = location.pathname;
    const index = PageData.findIndex((el) => el.path === currentPage);

    if (PageData.length - 1 === index) {
      navigate("/");
    } else {
      navigate(PageData[index + 1].path);
    }
  };

  return (
    <>
      {showNav && <Nav isMobile={isMobile} setShowNav={setShowNav} />}
      <NoiseEffect />
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
      <NextBtn isMobile={isMobile} onClick={handleNext} />
      <SoundImageWrapper>
        <img src={lpImage} alt="Lp이미지" />
      </SoundImageWrapper>
    </>
  );
};

const NoiseEffect = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  mix-blend-mode: soft-light;
  opacity: 0.5;
  background: no-repeat center/cover url(${noise});
`;

export default Layout;
