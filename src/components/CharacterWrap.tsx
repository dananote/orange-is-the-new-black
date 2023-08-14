import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import { CharactersData } from "../mock/characters";
import CharacterModal from "./CharacterModal";

export interface CharacterProps {
  bg?: string;
  shadow?: string;
  character?: string;
  modal?: string;
  hover?: string;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
}

const CharacterWrap: React.FC<CharacterProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");

  const handleModal = (modal: string): void => {
    setShowModal(true);
    setModalImage(modal);
  };

  return (
    <Characters>
      {CharactersData.map((el, index) => {
        return (
          <Character key={index} bg={el.bg}>
            <CharacterModal
              modal={modalImage}
              setShowModal={setShowModal}
              showModal={showModal}
            />
            <CharacterItem
              character={el.character}
              hover={el.hover}
              onClick={() => handleModal(el.modal)}
            />
          </Character>
        );
      })}
    </Characters>
  );
};

const Characters = styled.ul`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 50px;
`;

const Character = styled.li<CharacterProps>`
  position: relative;
  width: 800px;
  height: 100%;
  background: no-repeat center/contain url(${(props) => props.bg});
`;

const CharacterItem = styled.div<CharacterProps>`
  position: absolute;
  bottom: 0;
  width: 500px;
  height: 0;
  background: no-repeat center/cover url(${(props) => props.character});
  animation: image 0.7s ease-in-out forwards;
  transition: all 0.3s;
  cursor: pointer;

  @keyframes image {
    from {
      height: 0;
    }
    to {
      height: 680px;
    }
  }

  &:hover {
    transform: scale(1.05);
    background: no-repeat center/cover url(${(props) => props.hover});
  }
`;

export default CharacterWrap;
