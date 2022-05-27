import React from "react";
import './App.css';
import Characters from "./components/Characters";
import Location from "./components/Location";
import Episodes from "./components/Episodes"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes >
      <Route exact path="/" element={<Characters />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  )
}

export default App;
