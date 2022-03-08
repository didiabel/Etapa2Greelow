import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import StartUp from "./Components/StartUp";
import "bootstrap/dist/css/bootstrap.min.css";
import PageContextProvider from "./Store/appContext";
import Game from "./Components/Game";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    <PageContextProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/Etapa2Greelow/" element={<StartUp />} />
            <Route path="/Etapa2Greelow/juego" element={<Game/>} /> 
          </Routes>
        </Router>
      </div>
    </PageContextProvider>
  );
}

export default App;
