import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayersPresentation from "./components/Player";
import Main from "./components/Main";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import News from "./components/News";
import Contact from "./components/Contact";
import "./App.css";
import "./New.css";
import Detail from "./components/Detail";
import { createContext, useState } from "react";

function App() {
  const CartContext = createContext();
  return (
    <div>
      {/* <Navigation className="App" /> */}
      <Navigation />

      {/* <Cart/> */}

      <Routes>
        <Route path="/" element={<Films />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/news" element={<News />}></Route>

        <Route path="/football" element={<Main />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
