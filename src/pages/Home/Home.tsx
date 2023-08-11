import React from "react";
import { styled } from "styled-components";
import homeBg from "../../asset/main/main_bg.jpg";
import { LayoutProps } from "../../mock/type";
import HomePC from "./HomePC";

const Home: React.FC<LayoutProps> = ({ isDesktop, isMobile }) => {
  return (
    <HomeLayout>
      <HomePC isMobile={isMobile} />
    </HomeLayout>
  );
};

const HomeLayout = styled.article`
  &::after {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: no-repeat center/cover url(${homeBg});
    z-index: -10;
  }
`;

export default Home;
