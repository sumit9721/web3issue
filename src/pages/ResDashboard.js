import React, { useState } from "react";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm/Login";
//import SignIn from '../components/Signin/index.js'
//import LabDashboard from '../components/LabDashboard/LabDashboard';
import ResDashboard from "../components/ResDashboard/ResDashboard";

const ResDashboardpage = ({state}) => {
  return (
    <>
      <ResDashboard state={state}/>
    </>
  );
};

export default ResDashboardpage;
