import React, { useState } from "react";
import Footer from '../components/Footer';
import LabDashboard from "../components/LabDashboard/LabDashboard";
import RecordsByLab from "../components/LabDashboard/RecordsByLab";


const RecordsForLabPage = (state) => {
    return (
      <>
        <LabDashboard/>  
        <RecordsByLab state={state} />
      </>
    );
  };
  
  export default RecordsByLab;