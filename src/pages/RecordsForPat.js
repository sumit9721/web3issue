import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Pdashboard from '../components/Pdashboard/Pdashboard';
import RecordsByPat from "../components/Pdashboard/RecordsByPat";

const RecordsForPatPage = ({state}) => {
  return (
    <>
      <Pdashboard/>   
      <RecordsByPat state={state}/> 
    </>
  );
};

export default RecordsForPatPage;