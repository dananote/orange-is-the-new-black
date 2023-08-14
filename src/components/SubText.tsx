import React from "react";
import { styled } from "styled-components";
import { SubTextProps } from "../mock/type";

const SubText: React.FC<SubTextProps> = ({ subText, color }) => {
  return (
    <SubTextLayout color={color}>
      <img src={subText} alt="subtext" />
      <span></span>
    </SubTextLayout>
  );
};

const SubTextLayout = styled.section<SubTextProps>`
  width: 100%;
  height: 16px;
  margin-bottom: 24px;

  img {
    margin-right: auto;
    height: 100%;
  }

  span {
    display: inline-block;
    width: 3px;
    height: 100%;
    margin-left: 4px;
    background-color: ${(props) => (props.color ? props.color : "black")};
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

export default SubText;
