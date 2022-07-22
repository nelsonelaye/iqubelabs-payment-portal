import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentHead from "./PaymentHead/PaymentHead";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Billing from "./Billing/Billing";
import Confirm from "./Confirm/Confirm";
import Complete from "./Complete/Complete";
const CompleteRoute = () => {
  return (
    <Routes>
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
};

export default CompleteRoute;

const Container = styled.div`
  background-color: #fff;
  background-image: url("assets/wave.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
