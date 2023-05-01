import React, { useState } from "react";
import Footer from '../components/Footer';
import PharmaAccess from "../components/PharmaDashboard/PharmaAccess";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard";
import RecordsByPharma from "../components/PharmaDashboard/RecordsByPharma"

const RecordsForPharmaPage = (state) => {
    return (
      <>
        <PharmaDashboard/>  
        <RecordsByPharma state={state} />
      </>
    );
  };
  
  export default RecordsByPharma;