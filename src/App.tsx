import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Synopsis from "./pages/Synopsis";
import Character from "./pages/Character";
import PageTransition from "./transition/PageTransition";
import Layout from "./layout/Layout";
import { useMediaQuery } from "react-responsive";

function App() {
  const location = useLocation();
  const isDesktop = useMediaQuery({ query: "(min-width:1100px)" });
  const isMobile = useMediaQuery({ query: "(max-width:1099px)" });

  return (
    <>
      <GlobalStyle />
      <Layout isDesktop={isDesktop} isMobile={isMobile} />
      <PageTransition transitionKey={location.pathname}>
        <Routes>
          <Route
            path="/"
            element={<Home isDesktop={isDesktop} isMobile={isMobile} />}
          />
          <Route path="/synopsis" element={<Synopsis isMobile={isMobile} />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
