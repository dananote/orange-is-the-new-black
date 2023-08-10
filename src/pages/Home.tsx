import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import homeBg from "../asset/main/main_bg.jpg";

const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return <HomeLayout></HomeLayout>;
};

const HomeLayout = styled.article`
  background: no-repeat center/cover url(${homeBg});
  height: 100vh;
  width: 100vw;
`;

export default Home;
