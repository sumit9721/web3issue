import React, { useState,useEffect } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Ddetail from "../components/Ddashboard/Ddetail";
import Daccess from "../components/Ddashboard/Daccess";
const Docaccess = ({state}) => {
  useEffect(() => {
    
  }, [state]);
  return (
    <>
      <Ddashboard/>  
      <Daccess state={state} />
    </>
  );
};

export default Docaccess;