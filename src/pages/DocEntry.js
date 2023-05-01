import React from "react";
//import Footer from '../components/Footer';
//import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
//import PatLogin from "../components/ToLogin/toLoginPat";
import DocLogin from "../components/ToLogin/toLoginDoc";
const DocPage = ({state}) => {
  console.log(state, 'dl')
  return (
    <>
      <h1>cdcfs</h1>
      <DocLogin  state={state}/>
    </>
  );
};

export default DocPage;
