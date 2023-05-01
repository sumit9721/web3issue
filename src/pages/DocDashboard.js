import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';

const DocDashboard = ({state}) => {
  console.log(state,'abcd');
  return (
    <>
      <Ddashboard state={state}/>    
    </>
  );
};

export default DocDashboard;