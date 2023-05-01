import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Pdashboard from '../components/Pdashboard/Pdashboard';

const PatDashboard = ({state}) => {
  console.log(state, 'patdas');
  return (
    <>
      <Pdashboard state={state}/>    
    </>
  );
};

export default PatDashboard;