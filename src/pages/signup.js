import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'

const SignupPage = ({state}) => {

  return (
    <>
      <h1>cdcfs</h1>
      <LoginForm state={state}/>      
    </>
  );
};

export default SignupPage;