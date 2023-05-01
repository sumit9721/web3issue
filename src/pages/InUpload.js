import React, { useState } from "react";
// import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard";
// import PharmaUpload from "../components/PharmaDashboard/PharmaUpload";
import InDashboard from "../components/InDashboard/InDashboard";
import Inupload from "../components/InDashboard/Inupload";

const InUploadpage = ({state}) => {
  return (
    <>
      <InDashboard />
      <Inupload state={state}/>
    </>
  );
};

export default InUploadpage;
