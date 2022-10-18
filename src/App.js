import "./styles.css";

import MyContext from "./my-context";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import { useState, useEffect } from "react";

export default function App() {
  const endpoint = "/fotos.json";

  const [imagenes, setImagenes] = useState([])
  const globalState = {imagenes, setImagenes}

  // consumo de fotos.json
  useEffect (() => {
    obtenerImagenes()
  }, [])
  
  const obtenerImagenes = async () => {
    const response = await fetch (endpoint)
    let {photos} = await response.json()
    const newPhotos = photos.map(elem => {
      return {
      id: elem.id,
      src: elem.src,
      liked: elem.liked,
      alt: elem.alt
      }}
    )
    setImagenes(newPhotos)
  }
  
  return (
    <div className="App">
      <MyContext.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}