import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { styled, css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import netflexLogo from "../src/asset/common/gnb_netflex.png";
import lpImage from "../src/asset/common/soundtrack.png";
import nextBtn from "../src/asset/common/next_btn.png";
import Nav from "../components/Nav";
import { PageData } from "../mock/menuList";

export interface LayoutProps {
  isMobile?: boolean;
  setShowNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = () => {
  const isDesktop = useMediaQuery({ query: "(min-width:800px)" });
  const isMobile = useMediaQuery({ query: "(max-width:799px)" });
  const location = useLocation();
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleMenu = () => {
    setShowNav((prev) => !prev);
  };
  const menuList = [1, 2, 3];

  return (
    <>
      {showNav && <Nav isMobile={isMobile} setShowNav={setShowNav} />}
      <Outlet />
      {isDesktop && (
        <DHeaderLayout>
          <div>
            <Link to="">
              <img src={netflexLogo} alt="넷플릭스 로고" />
            </Link>
          </div>
          <div>
            <MenuItem onClick={handleMenu}>
              {menuList.map((el, index) => {
                return (
                  <li key={index} className={showNav ? "active" : ""}></li>
                );
              })}
            </MenuItem>
          </div>
          <div>
            <Pagenation>
              {PageData.map((el, index) => {
                return (
                  <li
                    key={index}
                    className={location.pathname === el.path ? "current" : ""}
                  ></li>
                );
              })}
            </Pagenation>
          </div>
        </DHeaderLayout>
      )}
      {isMobile && (
        <MHeaderLayout>
          <MenuItem isMobile={isMobile} onClick={handleMenu}>
            {menuList.map((el, index) => {
              return <li key={index} className={showNav ? "active" : ""}></li>;
            })}
          </MenuItem>
        </MHeaderLayout>
      )}
      <NextBtn isMobile={isMobile} />
      <SoundImageWrapper>
        <img src={lpImage} alt="Lp이미지" />
      </SoundImageWrapper>
    </>
  );
};

const DHeaderLayout = styled.header`
  width: 60px;
  height: 100vh;
  position: fixed;
  background-color: rgb(202, 77, 2);
  z-index: 10;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div + div {
    border-top: 0.5px solid rgba(255, 255, 255, 0.5);
  }

  img {
    width: 16px;
    height: 60px;
  }
`;

const MenuItem = styled.ul<LayoutProps>`
  display: flex;
  gap: 8px;
  cursor: pointer;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};

  li {
    width: 3px;
    height: 30px;
    background-color: white;
    transition: all 0.3s;
    ${(props) =>
      props.isMobile &&
      css`
        width: 36px;
        height: 3px;
      `}
  }

  .active:nth-child(1) {
    transform: rotate(-45deg) translateX(2.5px) translateY(13.5px);
    ${(props) =>
      props.isMobile &&
      css`
        transform: rotate(-45deg) translateX(-5px) translateY(10.2px);
      `}
  }

  .active:nth-child(2) {
    transform: rotate(-45deg) translateX(-5.5px) translateY(6px);
    ${(props) =>
      props.isMobile &&
      css`
        transform: rotate(45deg) translateX(2px) translateY(-2px);
      `}
  }

  .active:nth-child(3) {
    transform: rotate(45deg) translateX(-2px) translateY(14px);
    ${(props) =>
      props.isMobile &&
      css`
        transform: rotate(-45deg) translateX(10px) translateY(-6px);
      `}
  }
`;

const Pagenation = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  li {
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50px;
  }

  .current {
    border: 3px solid rgb(202, 77, 2);
    outline: 2px solid white;
  }
`;

// mobile

const MHeaderLayout = styled.header`
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  position: fixed;
  background-color: rgb(202, 77, 2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const SoundImageWrapper = styled.div`
  position: fixed;
  z-index: 10;
  bottom: -80px;
  width: 100vw;
  display: flex;
  justify-content: center;

  img {
    animation: rotate 3s infinite linear alternate;
  }

  @keyframes rotate {
    from {
      transform: rotateZ(0) scale(0.8);
    }

    to {
      transform: rotateZ(360deg) scale(1);
    }
  }
`;

const NextBtn = styled.button<LayoutProps>`
  width: 150px;
  height: 56px;
  position: fixed;
  z-index: 10;
  right: 40px;
  top: 50%;
  transition: all 0.3s;
  background: no-repeat center/cover url(${nextBtn});

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 140px;
      height: 46px;
      right: 12px;
      top: 70%;
    `}
`;

export default Layout;
