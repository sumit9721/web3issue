import React from "react";
import { Container } from "./LoginElements";
import { FormWrap } from "./LoginElements";
import { Icon } from "./LoginElements";
import { FormContent } from "./LoginElements";
import { Form } from "./LoginElements";
import { FormH1 } from "./LoginElements";
import { FormLabel } from "./LoginElements";
import { FormInput } from "./LoginElements";
import { FormButton } from "./LoginElements";
import { Text } from "./LoginElements";
import Footer from "../Footer";
import { FormError } from "./LoginElements";

import { useState, useEffect } from 'react';

const LabForm = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const labRegister = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const _name = document.querySelector("#name").value;
    const license = document.querySelector("#license").value;
    const _contact = document.querySelector("#contact").value;
    const _location = document.querySelector("#location").value;

    console.log(_name, _location, _contact, license);

    try {
      const transaction = await contract.addLaboratory(_name, _location, _contact, license);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("register-form").reset();
      setError("");
      setShowError(false);
      window.location.href = "/LabEntry";
    } catch (error) {
      setError("Already registered as Lab or an error occurred.");
      setShowError(true);
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
            <Form id="register-form" action="/LabEntry" onSubmit={labRegister}>
              <FormH1>Sign Up to register as new Laboratory</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
              <FormLabel htmlFor="to">Liscence no:</FormLabel>
              <FormInput id="license" type={String} required />
              <FormLabel htmlFor="to">Contact</FormLabel>
              <FormInput id="contact" type={Number} required />
              <FormLabel htmlFor="to">Location</FormLabel>
              <FormInput id="location" type={String} required />
              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}
              <FormButton type="submit" to="/LabEntry">
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

export default LabForm;
