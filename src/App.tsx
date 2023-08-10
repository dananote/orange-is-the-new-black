import { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Synopsis from "./pages/Synopsis";
import Character from "./pages/Character";
import PageTransition from "./transition/PageTransition";
import Layout from "./layout/Layout";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Layout />
      <PageTransition transitionKey={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/synopsis" element={<Synopsis />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
