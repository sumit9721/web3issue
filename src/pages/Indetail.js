import React, { useState } from "react";
import InDashboard from "./InDashboard";
import InDetail from "../components/InDashboard/InDetail";

const Indetail = ({state}) => {
  return (
    <>
      <InDashboard />
      <InDetail state={state}/>
    </>
  );
};

export default Indetail;
