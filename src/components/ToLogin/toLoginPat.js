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
import { FormError } from "./toLoginElements";


//import { Text } from "./LoginElements";
import Footer from "../Footer";

import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { useState } from "react";


const PatLogin = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  

  const patientLogin = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    console.log(name);


    try {
      const transaction = await contract.patientLogin(name, password);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("login-form").reset();
      setError("");
      setShowError(false);
      window.location.href = "/PatDashboard";
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

    /*const transaction = await contract.patientLogin(name, password);
    await transaction.wait();
    console.log("Transaction is done.");*/

  


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form onSubmit={patientLogin} id="login-form" action="/PatDashboard">
              <FormH1>Login as Patient</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
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
              <FormButton type="submit" to="/PatDashboard">
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

export default PatLogin;
