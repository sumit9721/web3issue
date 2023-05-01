import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import LabDashboard from '../components/LabDashboard/LabDashboard';
const LabDashboardpage = ({state}) => {
  return (
    <>
      <LabDashboard state={state}/>    
    </>
  );
};

export default LabDashboardpage;