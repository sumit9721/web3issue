import React, { useState } from "react";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard";
import PharmaDetail from "../components/PharmaDashboard/PharmaDetail";

const Phardetail = ({state}) => {
  return (
    <>
      <PharmaDashboard/>  
      <PharmaDetail state={state}/>
    </>
  );
};

export default Phardetail;