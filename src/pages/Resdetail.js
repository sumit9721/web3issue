import React, { useState } from "react";
import ResDashboard from "./ResDashboard";
import ResDetail from "../components/ResDashboard/ResDetail";

const Resdetail = ({state}) => {
  return (
    <>
      <ResDashboard />
      <ResDetail state={state}/>
    </>
  );
};

export default Resdetail;
