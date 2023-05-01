import React, { useState } from "react";
import Footer from '../components/Footer';
import InDashboard from "../components/InDashboard/InDashboard";
import RecordsByIn from "../components/InDashboard/RecordsByIn";


const RecordsForInPage = (state) => {
    return (
      <>
        <InDashboard/>  
        <RecordsByIn state={state} />
      </>
    );
  };
  
  export default RecordsByIn;