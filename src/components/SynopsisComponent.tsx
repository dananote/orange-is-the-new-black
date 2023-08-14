import React from "react";
import { styled, css } from "styled-components";
import { LayoutProps } from "../mock/type";
import backImage from "../asset/synopsis/main_title01.png";
import withImage from "../asset/synopsis/main-title02.png";
import convictionImage from "../asset/synopsis/maint-title03.png";
import subText from "../asset/synopsis/sub_title.png";
import SubText from "./SubText";
import subImg from "../asset/synopsis/gallary_photo.png";
import subImgGif from "../asset/synopsis/gallary_photo_on.gif";
import textImg from "../asset/synopsis/gallary_text.png";

const SynopsisComponent: React.FC<LayoutProps> = ({ isMobile }) => {
  return (
    <SynopLayout isMobile={isMobile}>
      <TitleWrap isMobile={isMobile}>
        <SubText subText={subText} color="white" />
        <TitleFirst>
          <img src={backImage} alt="back" />
          <img src={withImage} alt="with" />
        </TitleFirst>
        <TitleSecond>
          <img src={convictionImage} alt="conviction" />
        </TitleSecond>
        <p>
          Piper Chapman (Taylor Schilling), who lived in New York, was an
          ordinary New Yorker with a Jewish fiance. But one day, he was
          sentenced to 15 months in prison after his previous record of carrying
          drugs was revealed by his lover Alex Boz (Laura Prefon). And Pfeiffer
          is reunited with Alex in that prison...
        </p>
      </TitleWrap>
      <SynopRight isMobile={isMobile}>
        <img src={textImg} alt="subImg" />
        <div></div>
      </SynopRight>
    </SynopLayout>
  );
};

const SynopLayout = styled.section<LayoutProps>`
  height: ${(props) => (props.isMobile ? "inherit" : "100vh")};
  justify-content: space-around;

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
  max-width: 480px;

  div {
    width: 100%;
    overflow: hidden;
    aspect-ratio: 2 / 0.4;
  }

  p {
    color: white;
    margin-top: 40px;
    font-size: ${(props) => (props.isMobile ? "12px" : "14px")};
    line-height: 1.6;
  }

  ${(props) =>
    !props.isMobile &&
    css`
      &::after {
        content: "";
        display: block;
        width: 400px;
        height: 150px;
        margin-left: -150px;
        margin-top: -50px;
        background-color: rgba(202, 77, 2, 0.8);
        mix-blend-mode: color-dodge;
        z-index: -10;
      }
    `}
`;

const TitleFirst = styled.div`
  display: flex;
  gap: 5%;

  & img:nth-child(1) {
    width: 42%;
    height: 0;
    animation: up 0.7s 0.4s ease-in-out forwards;
  }

  & img:nth-child(2) {
    width: 42%;
    height: 0;
    animation: down 0.7s ease-in-out forwards;
  }
`;

const TitleSecond = styled.div`
  margin-top: 24px;

  img {
    width: 100%;
    height: 0;
    animation: up 0.7s 0.8s ease-in-out forwards;
  }
`;

const SynopRight = styled.div<LayoutProps>`
  width: ${(props) => (props.isMobile ? "100%" : "40%")};
  display: flex;
  flex-direction: column;
  gap: 24px;

  & img {
    align-self: flex-end;
    height: 24px;
    object-fit: contain;
  }

  & div {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: no-repeat center/cover url(${subImg});
  }

  & div:hover {
    background: no-repeat center/cover url(${subImgGif});
  }
`;
export default SynopsisComponent;
