import React from "react";
import Galeri from "./components/Galeri";
import Navbar from "./components/Navbar";
import "././components/Style.css";
import Profil from "./components/Profil";

const App = () => {
  return (
    <>
      <Navbar />
      <Galeri />
      <Profil />
    </>
  );
};

export default App;
