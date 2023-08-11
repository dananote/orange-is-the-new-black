import React from "react";
import { styled, css } from "styled-components";
import orange from "../../asset/main/main-title01.png";
import istheNew from "../../asset/main/main-title02.png";
import black from "../../asset/main/main-title04.png";
import subText from "../../asset/main/sub-title.png";
import piper from "../../asset/main/photo_piper.png";
import piperHover from "../../asset/main/photo_piper_on.gif";
import niky from "../../asset/main/photo_nicky.png";
import nikyHover from "../../asset/main/photo_nicky_on.gif";
import red from "../../asset/main/photo_red.png";
import redhover from "../../asset/main/photo_red_on.gif";
import tasty from "../../asset/main/photo_tasty.png";
import tastyHover from "../../asset/main/photo_tasty_on.gif";
import { LayoutProps } from "../../mock/type";

const HomePC: React.FC<LayoutProps> = ({ isMobile }) => {
  return (
    <HomePCLayout isMobile={isMobile}>
      <TitleWrap isMobile={isMobile}>
        <SubText>
          <img src={subText} alt="Bad grils Bad prisons stories" />
          <span></span>
        </SubText>
        <TitleFirst>
          <img src={orange} alt="orange" />
        </TitleFirst>
        <TitleSecond>
          <img src={istheNew} alt="is the new" />
          <img src={black} alt="black" />
        </TitleSecond>
        <LineOrange isMobile={isMobile} />
      </TitleWrap>

      <PhotoWrap isMobile={isMobile}>
        <Piper />
        <Nick isMobile={isMobile} />
        <Tasty />
        <Red />
      </PhotoWrap>
    </HomePCLayout>
  );
};

const HomePCLayout = styled.article<LayoutProps>`
  width: 90%;
  display: flex;
  gap: 5%;
  position: relative;
  left: 10%;
  align-items: center;

  ${(props) =>
    props.isMobile &&
    css`
      width: 80vw;
      flex-direction: column;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      gap: 50px;
    `}
`;

const TitleWrap = styled.section<LayoutProps>`
  max-width: ${(props) => (props.isMobile ? "100%" : "40%")};
  flex-shrink: 0;
  position: relative;

  div {
    width: 100%;
    aspect-ratio: 2 / 0.62;
  }

  @keyframes open {
    from {
      height: 0;
      transform: translateY(100px);
    }
    to {
      height: 100%;
      transform: translateY(0);
    }
  }

  @keyframes left {
    from {
      width: 0;
      transform: translateX(-10px);
    }
    to {
      width: 20%;
      transform: translateX(0);
    }
  }
`;

const SubText = styled.div`
  height: 20px;
  display: flex;
  gap: 4px;
  margin-bottom: 24px;

  img {
    margin-left: auto;
  }

  span {
    display: inline-block;
    width: 3px;
    height: 14px;
    background-color: black;
    animation: clip 0.4s infinite alternate;
  }

  @keyframes clip {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TitleFirst = styled.div`
  img {
    width: 100%;
    height: 0;
    animation: open 0.7s ease-in-out forwards;
  }
`;

const TitleSecond = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  & img:nth-child(1) {
    width: 0;
    height: 100%;
    animation: left 0.7s 0.4s ease-in-out forwards;
  }

  & img:nth-child(2) {
    width: 78%;
    height: 0;
    animation: open 0.7s 0.8s ease-in-out forwards;
  }
`;

const LineOrange = styled.div<LayoutProps>`
  width: 100%;
  height: 100px;
  margin-top: -10%;
  margin-left: -20%;
  background-color: rgb(202, 77, 2);
  mix-blend-mode: multiply;

  ${(props) =>
    props.isMobile &&
    css`
      height: 50px;
      margin-top: -5%;
    `}
`;

const PhotoWrap = styled.section<LayoutProps>`
  position: relative;
  width: 55%;
  height: 100vh;

  div {
    width: 320px;
    height: 320px;
    position: absolute;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;

      div {
        width: 300px;
        height: 300px;
      }
    `}
`;

const Piper = styled.div`
  background: no-repeat center/cover url(${piper});

  &:hover {
    background: no-repeat center/cover url(${piperHover});
  }
`;

const Nick = styled.div<LayoutProps>`
  background: no-repeat center/cover url(${niky});
  bottom: -30px;
  right: 0;

  &:hover {
    background: no-repeat center/cover url(${nikyHover});
  }

  ${(props) =>
    props.isMobile &&
    css`
      right: 150px;
    `}
`;

const Red = styled.div`
  background: no-repeat center/cover url(${red});
  bottom: 100px;
  left: 100px;

  &:hover {
    background: no-repeat center/cover url(${redhover});
  }
`;

const Tasty = styled.div`
  background: no-repeat center/cover url(${tasty});
  top: 200px;
  right: 150px;

  &:hover {
    background: no-repeat center/cover url(${tastyHover});
  }
`;

export default HomePC;
