import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Pages/Accueil";
import ModifierPatient from "./Pages/ModifierPatient";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Accueil />} path="/" />
          <Route element={<ModifierPatient />} path=":patientId/modifierPatient" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
