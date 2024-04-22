import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Pages/Accueil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Accueil />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
