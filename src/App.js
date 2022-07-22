import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentRoutes from "./Components/Payment/PaymentRoutes";
import CompleteRoute from "./Components/Payment/CompleteRoute";
import styled from "styled-components";
function App() {
  return (
    <BrowserRouter>
      <PaymentRoutes />
    </BrowserRouter>
  );
}

export default App;
