import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Importe 'Routes' e 'Navigate' para o React Router v6
import App from "./App.jsx";
import Inicial from "./page/inicialPage/inicial.jsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
