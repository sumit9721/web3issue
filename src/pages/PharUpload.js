import React, { useState } from "react";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard";
import PharmaUpload from "../components/PharmaDashboard/PharmaUpload";

const PharUpload = ({state}) => {
  return (
    <>
      <PharmaDashboard/>  
      <PharmaUpload state={state}/>
    </>
  );
};

export default PharUpload;