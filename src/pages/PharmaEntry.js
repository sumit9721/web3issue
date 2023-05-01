import React from "react";
//import Footer from '../components/Footer';
//import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import PharmaLogin from "../components/ToLogin/toLoginPharma";

const PharmaPage = ({state}) => {
  return (
    <>
      <h1>cdcfs</h1>
      <PharmaLogin state={state}/>
    </>
  );
};

export default PharmaPage;
