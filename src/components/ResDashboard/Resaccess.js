import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./ResdashboardElement";
import { FormWrap } from "./ResdashboardElement";
import { Icon } from "./ResdashboardElement";
import { FormContent } from "./ResdashboardElement";
import { Form } from "./ResdashboardElement";
import { FormH1 } from "./ResdashboardElement";
import { FormLabel } from "./ResdashboardElement";
import { FormInput } from "./ResdashboardElement";
import { FormButton } from "./ResdashboardElement";
import { FormError } from "./ResdashboardElement";
//import { Text } from './IndashboardElement';
import Footer from "../Footer";
import { useHistory, useNavigate } from 'react-router-dom';

const Resaccess = ({state}) => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const isValidEthereumAddress = (address) => {
    return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
  };

  const checkAccess = async (event) => {
    event.preventDefault();
    const { provider, signer, contract } = state;

    if (!isValidEthereumAddress(address)) {
      setError("Please enter a valid Ethereum address.");
      setShowError(true);
      return;
    }

    try {
      const records = await contract.getPatientRecords(address);
      navigate.push({
        pathname: "/RecordsForRes",
        state: { records },
      });
    } catch (error) {
      setAddress("");
      setError("Error accessing patient records. Please try again.");
      setShowError(true);
    }
  };

  const handleOkClick = () => {
    setShowError(false);
    document.getElementById("access-form").reset();
    setError("");
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
          <Form id="access-form" onSubmit={checkAccess}>
                    <FormH1>Enter address of the Patient to access record</FormH1>
                    <FormLabel htmlFor='for'>Patient Address: </FormLabel>
                    <FormInput id="address" type={String} required/>
                    {showError && (
                <FormError style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span>{error}</span>
                  <FormButton style={{height:'25px', width:'30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }} type="button" onClick={handleOkClick}>
                    OK
                  </FormButton>
                </FormError>
              )}
                    {/*<FormInput id="address" type={String} value={address} onChange={(e)=>setAddress(e.target.value)} />*/}
                    <FormButton type='submit'>Submit</FormButton>
                </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Resaccess />);*/

export default Resaccess;
