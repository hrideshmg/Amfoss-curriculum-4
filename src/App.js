import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Editor from "./components/Editor";
import Gallery from "./components/Gallery";
import { GalleryProvider } from "./components/GalleryContext";

const App = () => {
  return (
    <Router>
      <GalleryProvider>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </GalleryProvider>
    </Router>
  );
};

export default App;
