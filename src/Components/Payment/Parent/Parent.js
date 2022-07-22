import React from "react";
import Header from "../Header/Header";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Billing from "../Billing/Billing";
import Confirm from "../Confirm/Confirm";
const Parent = () => {
  return (
    <>
      <Header />
      <PersonalInfo />
      <Billing />
      <Confirm />
    </>
  );
};

export default Parent;
