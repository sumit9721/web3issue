import React from "react";
import { Container } from "./toLoginElements";
import { FormWrap } from "./toLoginElements";
import { Icon } from "./toLoginElements";
import { FormContent } from "./toLoginElements";
import { Form } from "./toLoginElements";
import { FormH1 } from "./toLoginElements";
import { FormLabel } from "./toLoginElements";
import { FormInput } from "./toLoginElements";
import { FormButton } from "./toLoginElements";
//import { Text } from "./toLoginElements";
import Footer from "../Footer";
import { FormError } from "./toLoginElements";

import { useState, useEffect } from 'react';

const LabLogin = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  

  const labLogin = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const name = document.querySelector("#name").value;
    const license = document.querySelector("#license").value;

    console.log(name);


    try {
      const transaction = await contract.laboratoryLogin(name, license);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("login-form").reset();
      setError("");
      setShowError(false);
      window.location.href = "/LabDashboard";
    } catch (error) {
      setError("Name, Password and Address don't match.");
      setShowError(true);
    }
  }
      
      const handleOkClick = () => {
        setShowError(false);
        document.getElementById("login-form").reset();
        setError("");
      };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form id="login-form" action="/LabDashboard" onSubmit={labLogin}>
              <FormH1>Login as Laboratory</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type={String} required />
              <FormLabel htmlFor="to">Liscence no:</FormLabel>
              <FormInput type={String} required />

              <FormButton type="submit" to="/LabDashboard">
                Log In
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

export default LabLogin;
