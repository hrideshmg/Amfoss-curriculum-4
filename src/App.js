import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Editor from "./components/Editor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/edit" element={<Editor />} />
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
