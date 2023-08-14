import React from "react";
import { styled, css, keyframes } from "styled-components";
import navBg from "../asset/common/menu_bg.png";
import { LayoutProps } from "../mock/type";
import { PageData } from "../mock/menuList";
import { Link } from "react-router-dom";

const Nav: React.FC<LayoutProps> = ({ isMobile, setShowNav, showNav }) => {
  const handleNav = () => {
    if (showNav && setShowNav) {
      setShowNav(false);
    }
  };
  return (
    <NavDarkBg isMobile={isMobile} showNav={showNav}>
      <h1 className="a11y-hidden">메뉴창</h1>
      <NavLayout isMobile={isMobile} showNav={showNav}>
        {PageData.map((el, index) => {
          return (
            <MenuList to={el.path} isMobile={isMobile} onClick={handleNav}>
              <span>0{index + 1}</span>
              <p>{el.page}</p>
            </MenuList>
          );
        })}
      </NavLayout>
    </NavDarkBg>
  );
};

const NavDarkBg = styled.div<LayoutProps>`
  visibility: ${(props) => (props.showNav ? "visible" : "hidden")};
  position: fixed;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  left: 60px;
  right: 0;

  ${(props) =>
    props.isMobile &&
    css`
      left: 0;
    `}
`;

const NavLayout = styled.article<LayoutProps>`
  width: ${(props) => (props.isMobile ? "100%" : "60%")};
  height: 100vh;
  animation: menu 0.4s ease-in-out normal;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: no-repeat center/ 100% 100vh url(${navBg});
  animation: ${(props) => (props.showNav ? oepnNav : closeNav)} 0.5s ease-in-out;
`;

const MenuList = styled(Link)<LayoutProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  color: white;
  font-size: 28px;
  font-family: "bebas";
  font-weight: bolder;
  margin-left: 100px;
  padding: 32px;

  ${(props) =>
    props.isMobile &&
    css`
      padding: 16px;
      margin-left: 32px;
      margin-top: -100px;
    `}

  & + & {
    margin-top: 40px;
  }

  span {
    font-size: 16px;
    color: #dbd8d5;
  }

  &:hover {
    p {
      transition: all 0.3s;
      transform: scale(1.1);
    }
  }
`;

const oepnNav = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-1000px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const closeNav = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-1000px);
  }
  `;

export default Nav;
