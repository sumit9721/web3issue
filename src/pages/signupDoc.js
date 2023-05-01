import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
import DocForm from '../components/LoginForm/loginDoc';
//import SignIn from '../components/Signin/index.js'

const SignupdocPage = ({state}) => {
  return (
    <>
      <h1>cdcfs</h1>
      <DocForm state={state}/>
    </>
  );
};

export default SignupdocPage;