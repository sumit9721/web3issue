import React, { useState } from "react";
import ResDashboard from "../components/ResDashboard/ResDashboard";
import Resaccess from "../components/ResDashboard/Resaccess";

const ResAccess = ({state}) => {
  return (
    <>
      <ResDashboard />
      <Resaccess state={state}/>
    </>
  );
};

export default ResAccess;
