import React from "react";
import { styled, keyframes } from "styled-components";
import { CharacterProps } from "./CharacterWrap";
import closeBtn from "../asset/character/pop-close-btn.png";

const CharacterModal: React.FC<CharacterProps> = ({
  modal,
  setShowModal,
  showModal,
}) => {
  const handleModal = () => {
    if (showModal && setShowModal) {
      setShowModal(false);
    }
  };
  return (
    <CharacterModalBg showModal={showModal}>
      <button type="button" onClick={handleModal} />
      <img src={modal} alt="" />
    </CharacterModalBg>
  );
};

const CharacterModalBg = styled.article<CharacterProps>`
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  position: fixed;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: visibility 0.15s ease-out;

  button {
    cursor: pointer;
    width: 56px;
    height: 56px;
    background: no-repeat center/contain url(${closeBtn});
    position: absolute;
    top: 60px;
    left: 1000px;
  }

  img {
    display: block;
    width: 600px;
    height: 800px;
    margin: 80px auto 0 auto;
    animation: ${(props) => (props.showModal ? fadeIn : fadeOut)} 0.7s
      cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-1000px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-1000px);
  }
`;
export default CharacterModal;
