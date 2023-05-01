import React, { useState } from "react";
import ResDashboard from "../components/ResDashboard/ResDashboard";
import Resupload from "../components/ResDashboard/Resupload";

const ResUploadpage = ({state}) => {
  return (
    <>
      <ResDashboard />
      <Resupload state={state}/>
    </>
  );
};

export default ResUploadpage;
