import React from "react";
import { styled } from "styled-components";
import netflexLogo from "../asset/common/gnb_netflex.png";
import { MenuItem, Pagenation } from "./LayoutStyle";
import { Link } from "react-router-dom";
import { LayoutProps } from "../mock/type";
import { PageData } from "../mock/menuList";

const LayoutPC: React.FC<LayoutProps> = ({ handleMenu, showNav, location }) => {
  const menuList = [1, 2, 3];
  return (
    <DHeaderLayout>
      <div>
        <Link to="">
          <img src={netflexLogo} alt="넷플릭스 로고" />
        </Link>
      </div>
      <div>
        <MenuItem onClick={handleMenu}>
          {menuList.map((el, index) => {
            return <li key={index} className={showNav ? "active" : ""}></li>;
          })}
        </MenuItem>
      </div>
      <div>
        <Pagenation>
          {PageData.map((el, index) => {
            return (
              <li
                key={index}
                className={location === el.path ? "current" : ""}
              ></li>
            );
          })}
        </Pagenation>
      </div>
    </DHeaderLayout>
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

export default LayoutPC;
