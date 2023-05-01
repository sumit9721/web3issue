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


const Pgrant = ({state}) => {

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const grantAccess = async(event)=>{
    event.preventDefault();
    console.log(state.state); 
    const { provider, signer, contract } = state.state;
    console.log(contract);
    const address = document.querySelector("#address").value;

    console.log(address);


    try {
      const transaction = await contract.grantAccess(address);
      await transaction.wait();
      console.log("Transaction is done.");
      document.getElementById("grant-form").reset();
      setError("");
      setShowError(false);
      setAccessGranted(true); // set accessGranted to true
      //window.location.href = "/PatEntry";
    } catch (error) {
      setError("Already Authorised or an error occurred.");
      setShowError(true);
    }
  }
      
      const handleOkClick = () => {
        setShowError(false);
        document.getElementById("grant-form").reset();
        setError("");
      };

  
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={grantAccess} id="grant-form">
              <FormH1>Grant Access</FormH1>
              <FormLabel htmlFor="to">Address to provide access: </FormLabel>
              <FormInput id="address" type={String} required/>

              {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{ height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'15px'  }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}

              {accessGranted && (
                <FormSuccess style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'  }}>
                  <span>Access Granted!</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={() => setAccessGranted(false)}>
                    OK
                  </FormButton>
                </FormSuccess>
              )}
              {/* <FormLabel htmlFor='from'>Address to revoke access: </FormLabel>
                    <FormInput type={ String } value={name1} onChange={(e)=>setName1(e.target.value)} /> */}
              <FormButton type="submit">submit</FormButton>
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

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pgrant />);*/

export default Pgrant;
