import React from "react";
import Navbar from "./components/NavBar/Navbar"
import './App.css';
//import Card from "./components/Card/Card";
//import CardAll from "./components/Card/CardAll";
//import { characters } from "./data/characters";
// import { rick } from "./data/singleCharacter";
//import Search from "./components/Search/Search";
import Characters from "./components/Characters";
import Location from "./components/Location";

function App() {

  return (
    <>
      <Navbar />
      <Characters />
      <Location />

    </>

  )
}

export default App;
