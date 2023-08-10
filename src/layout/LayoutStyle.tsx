import { styled, css } from "styled-components";
import { LayoutProps } from "../mock/type";
import nextBtn from "../asset/common/next_btn.png";

export const MenuItem = styled.ul<LayoutProps>`
  display: flex;
  gap: 8px;
  cursor: pointer;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};

  li {
    width: 3px;
    height: 30px;
    background-color: white;
    transition: all 0.3s;
    ${(props) =>
      props.isMobile &&
      css`
        width: 36px;
        height: 3px;
      `}
  }
  .active:nth-child(1) {
    transform: rotate(-45deg) translateX(2.5px) translateY(13.5px);
    ${(props) =>
      props.isMobile &&
      css`
        transform: rotate(-45deg) translateX(-5px) translateY(10.2px);
      `}
  }

  .active:nth-child(2) {
    transform: rotate(-45deg) translateX(-5.5px) translateY(6px);
    ${(props) =>
      props.isMobile &&
      css`
        transform: rotate(45deg) translateX(2px) translateY(-2px);
      `}
  }

  .active:nth-child(3) {
    transform: rotate(45deg) translateX(-2px) translateY(14px);
    ${(props) =>
      props.isMobile &&
      css`
        transform: rotate(-45deg) translateX(10px) translateY(-6px);
      `}
  }
`;

export const Pagenation = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  li {
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50px;
  }

  .current {
    border: 3px solid rgb(202, 77, 2);
    outline: 2px solid white;
  }
`;

export const SoundImageWrapper = styled.div`
  position: fixed;
  z-index: 10;
  bottom: -80px;
  width: 100vw;
  display: flex;
  justify-content: center;

  img {
    animation: rotate 3s infinite linear alternate;
  }

  @keyframes rotate {
    from {
      transform: rotateZ(0) scale(0.8);
    }

    to {
      transform: rotateZ(360deg) scale(1);
    }
  }
`;

export const NextBtn = styled.button<LayoutProps>`
  width: 150px;
  height: 56px;
  position: fixed;
  z-index: 10;
  right: 40px;
  top: 50%;
  transition: all 0.3s;
  background: no-repeat center/cover url(${nextBtn});

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 140px;
      height: 46px;
      right: 12px;
      top: 70%;
    `}
`;
