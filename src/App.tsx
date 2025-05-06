import { useEffect } from "react";
import "@n8n/chat/style.css";
import { Routes, Route } from 'react-router-dom';
import Home from './Infraestructure/Home';
import Form from './Infraestructure/Form';
import "./App.css";
import React from "react";
import InitialInfoStep from "./Infraestructure/InitialInfoStep";

const steps = [
  "Registro",
  "Verificación Identidad",
  "Consulta Historial",
  "Analisis de Riesgo",
  "Generacion Contrato",
  "Documentacion Adicional",
  "Finalizacion",
];
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-user" element={<Form />} />
    </Routes>
  );
};

export default App;
