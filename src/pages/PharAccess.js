import React, { useState } from "react";
import PharmaAccess from "../components/PharmaDashboard/PharmaAccess";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard"

const PharAccess = ({state}) => {
  return (
    <>
      <PharmaDashboard />  
      <PharmaAccess state={state}/>
    </>
  );
};

export default PharAccess;