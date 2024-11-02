import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Verification from "./pages/Verification";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
};

export default App;
