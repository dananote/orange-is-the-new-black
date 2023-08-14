import React from "react";
import homeBg from "../asset/main/main_bg.jpg";
import { LayoutProps } from "../mock/type";
import HomeComponent from "../components/HomeComponent";
import { PageBackground } from "../layout/LayoutStyle";

const Home: React.FC<LayoutProps> = ({ isDesktop, isMobile }) => {
  return (
    <PageBackground bgImage={homeBg} isMobile={isMobile}>
      <HomeComponent isMobile={isMobile} />
    </PageBackground>
  );
};

export default Home;
