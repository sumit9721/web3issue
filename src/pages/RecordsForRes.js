import React, { useState } from "react";
import Footer from '../components/Footer';
import ResDashboard from "../components/ResDashboard/ResDashboard";
import RecordsByRes from "../components/ResDashboard/RecordsByRes";

const RecordsForResPage = (state) => {
    return (
      <>
        <ResDashboard/>  
        <RecordsByRes state={state} />
      </>
    );
  };
  
  export default RecordsByRes;