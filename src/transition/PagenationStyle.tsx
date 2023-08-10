import styled, { css } from "styled-components";

export const PageTransitionGroup = styled.div<{ timeout: number }>`
  position: relative;
  width: 100vw;

  ${({ timeout = 500 }) => css`
    .slide-enter {
      transform: translateX(100%);
    }

    .slide-enter-active {
      z-index: 1;
      transform: translateX(0);
      transition: transform 300ms ease-in-out;

      box-shadow: -5px 0px 25px rgba(0, 0, 0, 0.05);
    }

    .slide-exit {
      transform: translateX(0);
    }

    .slide-exit-active {
      transform: translateX(-20%);
      transition: transform 300ms ease-in-out;
    }
  `}
`;

export const PageTransitionWrapper = styled.div`
  backface-visibility: hidden;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;
