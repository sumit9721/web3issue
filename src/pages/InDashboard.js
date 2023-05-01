import React, { useState } from "react";
import InDashboard from "../components/InDashboard/InDashboard";

const InDashboardpage = ({state}) => {
  return (
    <>
      <InDashboard state={state}/>
    </>
  );
};

export default InDashboardpage;
