import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Verification from "./pages/Verification";
import Security from "./pages/Security";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/security" element={<Security />} />
    </Routes>
  );
};

export default App;
