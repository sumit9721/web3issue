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
import { FormError } from "./LoginElements";


import { Text } from "./LoginElements";
import Footer from "../Footer";

import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

import { useState, useEffect } from 'react';

const DocForm = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const doctorRegister = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const _name = document.querySelector("#name").value;
    const license = document.querySelector("#license").value;
    const _hname = document.querySelector("#hospital").value;
    const _faculty = document.querySelector("#faculty").value;
    const _contact = document.querySelector("#contact").value;

    console.log(_name, license, _hname, _faculty, _contact);

    try {
      const transaction = await contract.addDoctor(_name, license, _hname, _faculty, _contact);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("register-form").reset();
      setError("");
      setShowError(false);
      window.location.href = "/DocEntry";
    } catch (error) {
      setError("Already registered as doctor.");
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
            <Form id="register-form" onSubmit={doctorRegister} action="/DocEntry">
              <FormH1>Sign Up to register as new Doctor</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type={String} required />
              <FormLabel htmlFor="to">Liscence no:</FormLabel>
              <FormInput id="license" type={String} required />
              <FormLabel htmlFor="to">Hospital name</FormLabel>
              <FormInput id="hospital" type={String} required />
              <FormLabel htmlFor="to">Faculty</FormLabel>
              <FormInput id="faculty" type={String} required />
              <FormLabel htmlFor="to">Contact</FormLabel>
              <FormInput id="contact" type={Number} required />
              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}
              <FormButton type="submit" to="/DocEntry">
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

export default DocForm;
