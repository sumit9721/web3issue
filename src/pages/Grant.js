import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Pdashboard from '../components/Pdashboard/Pdashboard';
import Pdetail from "../components/Pdashboard/Pdetail";
import Pgrant from "../components/Pdashboard/Pgrant";

const Grant = (state) => {
  return (
    <>
      <Pdashboard/>   
      <Pgrant state={state}/> 
    </>
  );
};

export default Grant;