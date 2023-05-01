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

const ResLogin = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  

  const resLogin = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const from = await signer.getAddress();
    console.log(from);
    const name = document.querySelector("#name").value;
    const license = document.querySelector("#license").value;

    console.log(name);


    try {
      const transaction = await contract.researcherLogin(name, license);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("login-form").reset();
      setError("");
      setShowError(false);
      window.location.href = "/ResDashboard";
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
          <Form onSubmit={resLogin} id="login-form" action="/ResDashboard">
              <FormH1>Log in as Researcher</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
              <FormLabel htmlFor="to">Liscence no:</FormLabel>
              <FormInput id="license" type={String} required />
              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}

              <FormButton type="submit" to="/ResDashboard">
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

export default ResLogin;
