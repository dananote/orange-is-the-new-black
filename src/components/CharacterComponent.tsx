import React from "react";
import { styled, css } from "styled-components";
import who from "../asset/character/mint-title01.png";
import are from "../asset/character/main-title02.png";
import you from "../asset/character/main-title03.png";
import { LayoutProps } from "../mock/type";
import SubText from "./SubText";
import subTextImg from "../asset/character/sub-title.png";
import BadGirl from "../asset/character/paper_badGirl.png";
import CharacterWrap from "./CharacterWrap";

const CharacterComponent: React.FC<LayoutProps> = ({ isMobile }) => {
  return (
    <CharacterLayout>
      <TitleWrap isMobile={isMobile}>
        <SubText subText={subTextImg} />
        <TitleFirst>
          <img src={who} alt="who" />
          <img src={are} alt="are" />
        </TitleFirst>
        <TitleSecond>
          <img src={you} alt="you" />
          <img src={BadGirl} alt="bad girl's" />
        </TitleSecond>
      </TitleWrap>
      <CharacterWrap />
    </CharacterLayout>
  );
};

const CharacterLayout = styled.section`
  height: 100vh;
  display: flex;
  gap: 100px;
  align-items: center;

  @keyframes up {
    from {
      height: 0;
      transform: translateY(200px);
    }
    to {
      height: 100%;
      transform: translateY(0);
    }
  }

  @keyframes down {
    from {
      height: 0;
      transform: translateY(-100px);
    }
    to {
      height: 100%;
      transform: translateY(0);
    }
  }
`;
const TitleWrap = styled.div<LayoutProps>`
  flex-shrink: 0;
  position: relative;
  max-width: 500px;

  div {
    width: ${(props) => (props.isMobile ? "100%" : "500px")};
    aspect-ratio: 2/ 0.62;
    overflow: hidden;
  }
`;

const TitleFirst = styled.div`
  display: flex;
  gap: 5%;

  & img:nth-child(1) {
    width: 45%;
    height: 0;
    animation: up 0.7s 0.4s ease-in-out forwards;
  }

  & img:nth-child(2) {
    width: 45%;
    height: 0;
    animation: down 0.7s ease-in-out forwards;
  }
`;

const TitleSecond = styled.div`
  margin-top: 24px;

  img:nth-child(1) {
    width: 45%;
    height: 0;
    animation: up 0.7s 0.8s ease-in-out forwards;
  }

  img:nth-child(2) {
    width: 45%;
  }
`;

export default CharacterComponent;
