import React, { useState } from "react";
//import PharmaAccess from "../components/PharmaDashboard/PharmaAccess";
//import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard"
import LabDashboard from "../components/LabDashboard/LabDashboard";
import Labaccess from "../components/LabDashboard/Labaccess";

const LabAccess = ({state}) => {
  return (
    <>
      <LabDashboard />  
      <Labaccess state={state}/>
    </>
  );
};

export default LabAccess;