import React from "react";

import { styled } from "styled-components";
import CharacterComponent from "../components/CharacterComponent";
import characterBg from "../asset/character/character_bg.png";
import { LayoutProps } from "../mock/type";
import noise from "../asset/common/noise.gif";
import { PageBackground } from "../layout/LayoutStyle";

const Character: React.FC<LayoutProps> = ({ isMobile, isDesktop }) => {
  return (
    <>
      {isDesktop && (
        <CharacterBackground>
          <Inner>
            <CharacterComponent isMobile={isMobile} />
          </Inner>
        </CharacterBackground>
      )}
      {isMobile && (
        <PageBackground bgImage={characterBg} isMobile={isMobile}>
          <CharacterComponent isMobile={isMobile} />
        </PageBackground>
      )}
    </>
  );
};

const CharacterBackground = styled.article`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const Inner = styled.div`
  padding: 0 50px 0 250px;
  width: 5500px;
  height: 100%;
  margin-left: -50px;
  background: no-repeat center/cover url(${characterBg});

  &::before {
    display: block;
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode: soft-light;
    opacity: 0.5;
    background: no-repeat center/cover url(${noise});
  }
`;

export default Character;
