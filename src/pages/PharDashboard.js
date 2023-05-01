import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import PharmaDashboard from '../components/PharmaDashboard/PharmaDashboard';

const PharDashboardpage = ({state}) => {
  return (
    <>
      <PharmaDashboard state={state}/>    
    </>
  );
};

export default PharDashboardpage;