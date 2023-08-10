import React from "react";
import { Outlet, Link } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <>
      <Outlet />
      <LayoutWrapper>
        <Link to="/">Home</Link>
        <Link to="/synopsis">synopsis</Link>
        <Link to="/character">character</Link>
      </LayoutWrapper>
    </>
  );
};

const LayoutWrapper = styled.header`
  position: fixed;
  top: 0;
  background-color: red;
  z-index: 10;
`;

export default Layout;
