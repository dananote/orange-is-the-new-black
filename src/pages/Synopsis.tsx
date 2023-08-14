import React from "react";
import synopsisBg from "../asset/synopsis/scene02_bg.png";
import SynopsisComponent from "../components/SynopsisComponent";
import { LayoutProps } from "../mock/type";
import { PageBackground } from "../layout/LayoutStyle";

const Synopsis: React.FC<LayoutProps> = ({ isMobile }) => {
  return (
    <PageBackground bgImage={synopsisBg} isMobile={isMobile}>
      <SynopsisComponent isMobile={isMobile} />
    </PageBackground>
  );
};

export default Synopsis;
