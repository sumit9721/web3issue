import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./DdashboardElements";
import { FormWrap } from "./DdashboardElements";
import { Icon } from "./DdashboardElements";
import { FormContent } from "./DdashboardElements";
import { Form } from "./DdashboardElements";
import { FormH1 } from "./DdashboardElements";
import { FormLabel } from "./DdashboardElements";
import { FormInput } from "./DdashboardElements";
import { FormButton } from "./DdashboardElements";
import { Text } from "./DdashboardElements";
import Footer from "../Footer";
import { FormError } from "./DdashboardElements";

const Dupload = ({state}) => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  

  const docUpload = async(event)=>{
    event.preventDefault();
    const { provider, signer, contract } = state;
    console.log(contract);
    const _uName = document.querySelector("#docName").value;
    const _reason = document.querySelector("#reason").value;
    const _visitedDate = document.querySelector("#date").value;
    const _summary = document.querySelector("#summary").value;
    const addr = document.querySelector("#address").value;

    console.log(_uName, _reason, _visitedDate, _summary, addr);


    try {
      const transaction = await contract.addRecord(_uName, _reason, _visitedDate, _summary, addr);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("upload-form").reset();
      setError("");
      setShowError(false);
      //window.location.href = "/PatEntry";
    } catch (error) {
      setError("Unauthorised or an error occurred.");
      setShowError(true);
    }
  }
      
      const handleOkClick = () => {
        setShowError(false);
        document.getElementById("upload-form").reset();
        setError("");
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`New record was added`);
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form id="upload-form" onSubmit={docUpload}>
              <FormH1>Upload records</FormH1>
              <FormLabel htmlFor="for">Patient account address</FormLabel>
              <FormInput id="address" type={String} required />
              <FormLabel htmlFor="to">Doctor Name</FormLabel>
              <FormInput id="docName" type="name" required />
              <FormLabel htmlFor="to">Visit reason</FormLabel>
              <FormInput id="reason" type={String} required />
              <FormLabel htmlFor="to">Visit Date</FormLabel>
              <FormInput id="date" type="date" required />
              <FormLabel htmlFor="to">Summary</FormLabel>
              <FormInput id="summary" type={String} required />

              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}
              {/* <FormLabel htmlFor='myfile'>Choose File</FormLabel>
                    <FormInput type='file' id='myfile' name= "myfile" required/> */}
              <FormButton type="submit">Add record</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Dupload;
