import React from "react";
import { styled } from "styled-components";
import { MenuItem } from "./LayoutStyle";
import { LayoutProps } from "../mock/type";

const LayoutMobile: React.FC<LayoutProps> = ({
  isMobile,
  showNav,
  handleMenu,
}) => {
  const menuList = [1, 2, 3];
  return (
    <MHeaderLayout>
      <MenuItem isMobile={isMobile} onClick={handleMenu}>
        {menuList.map((el, index) => {
          return <li key={index} className={showNav ? "active" : ""}></li>;
        })}
      </MenuItem>
    </MHeaderLayout>
  );
};

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

export default LayoutMobile;
