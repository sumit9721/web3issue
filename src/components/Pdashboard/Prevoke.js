import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./PdashboardElements";
import { FormWrap } from "./PdashboardElements";
import { Icon } from "./PdashboardElements";
import { FormContent } from "./PdashboardElements";
import { Form } from "./PdashboardElements";
import { FormH1 } from "./PdashboardElements";
import { FormLabel } from "./PdashboardElements";
import { FormInput } from "./PdashboardElements";
import { FormButton } from "./PdashboardElements";
import { FormError } from "./PdashboardElements";
import { FormSuccess } from "./PdashboardElements";
import Footer from "../Footer";


const Prevoke = ({state}) => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [accessRevoked, setAccessRevoked] = useState(false);



  const revokeAccess = async(event)=>{
    event.preventDefault();
    console.log(state);
    const { provider, signer, contract } = state;
    console.log(contract);
    const address = document.querySelector("#address").value;

    console.log(address);


    try {
      const transaction = await contract.revokeAccess(address);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("revoke-form").reset();
      setError("");
      setShowError(false);
      setAccessRevoked(true); // set accessRevoked to true
      //window.location.href = "/PatEntry";
    } catch (error) {
      setError("Already unauthorised or an error occurred.");
      setShowError(true);
    }
  }
      
      const handleOkClick = () => {
        setShowError(false);
        document.getElementById("revoke-form").reset();
        setError("");
      };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={revokeAccess} id="revoke-form" >
              <FormH1>Revoke Access</FormH1>
              {/* <FormLabel htmlFor='to'>Address to provide access: </FormLabel>
                    <FormInput type={ String } value={name} onChange={(e)=>setName(e.target.value)} /> */}
              <FormLabel htmlFor="from">Address to revoke access: </FormLabel>
              <FormInput id="address" type={String} required/>

              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}

              {accessRevoked && (
                <FormSuccess style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>Access Revoked!</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={() => setAccessRevoked(false)}>
                    OK
                  </FormButton>
                </FormSuccess>
              )}
              {/* <FormLabel htmlFor='from'>Address to revoke access: </FormLabel>
                    <FormInput type={ String } value={name1} onChange={(e)=>setName1(e.target.value)} /> */}
              <FormButton type="submit">submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Prevoke />);

export default Prevoke;
