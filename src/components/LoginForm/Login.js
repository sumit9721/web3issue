import React from "react";
import { useState, useEffect } from "react";
import { Container } from "./LoginElements";
import { FormWrap } from "./LoginElements";
import { Icon } from "./LoginElements";
import { FormContent } from "./LoginElements";
import { Form } from "./LoginElements";
import { FormH1 } from "./LoginElements";
import { FormLabel } from "./LoginElements";
import { FormInput } from "./LoginElements";
import { FormButton } from "./LoginElements";
import { FormError } from "./LoginElements";

import { Text } from "./LoginElements";
import Footer from "../Footer";

import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

const LoginForm = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);


  const patientRegister = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const _name = document.querySelector("#name").value;
    const _phone = document.querySelector("#phone").value;
    const _gender = document.querySelector("#gender").value;
    const _dob = document.querySelector("#dob").value;
    const _password = document.querySelector("#password").value;

    console.log(_name, _phone, _gender, _dob);

    try {
      const transaction = await contract.addPatient(_name, _phone, _gender, _dob, _password);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("register-form").reset();
      setError("");
      setShowError(false);
      window.location.href = "/PatEntry";
    } catch (error) {
      setError("Already registered as patient or an error occurred.");
      setShowError(true);
      console.log(error);
    }
  }

  const handleOkClick = () => {
    setShowError(false);
    document.getElementById("register-form").reset();
    setError("");
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form id="register-form" onSubmit={patientRegister} action="/PatEntry">
              <FormH1>Sign Up to register as new patient</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
              <FormLabel htmlFor="for">Phone no:</FormLabel>
              <FormInput id="phone" type={String} required />
              <FormLabel htmlFor="for">gender</FormLabel>
              <FormInput id="gender" type={String} required />
              <FormLabel htmlFor="for">DOB</FormLabel>
              <FormInput id="dob" type={String} required />
              <FormLabel htmlFor="to">Password</FormLabel>
              <FormInput id="password" type="password" required />
              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}
              <FormButton type="submit" to="/PatEntry">
                Register
              </FormButton>
              {/* <Text>Forgot Password</Text>
                      <Text>Sign Up</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default LoginForm;
