import React from "react";
import { styled } from "styled-components";

const Character = () => {
  return (
    <CharacterLayout>
      <h1>Character</h1>
      <p>Character</p>
    </CharacterLayout>
  );
};

const CharacterLayout = styled.article`
  background-color: blue;
  height: 100vh;
`;

export default Character;
