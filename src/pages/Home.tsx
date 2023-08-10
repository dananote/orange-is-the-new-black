import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <HomeLayout>
      <h1>home</h1>
      <p>home</p>
    </HomeLayout>
  );
};

const HomeLayout = styled.article`
  background-color: salmon;
  height: 100vh;
`;

export default Home;
