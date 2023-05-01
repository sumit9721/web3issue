import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './PharmaElements';
import { FormWrap } from './PharmaElements';
import { Icon } from './PharmaElements';
import { FormContent } from './PharmaElements';
import { Form } from './PharmaElements';
import { FormH1 } from './PharmaElements';
import { FormLabel } from './PharmaElements';
import { FormInput } from './PharmaElements';
import { FormButton } from './PharmaElements';
import { Text } from './PharmaElements';
import Footer from '../Footer';
import { FormError } from './PharmaElements';

import { useHistory, useNavigate } from 'react-router-dom';


const PharmaAccess = ({state}) => {
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
        pathname: "/RecordsForPharma",
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
      <Footer/>
    </>    
  );
};
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PharmaAccess />);*/

export default PharmaAccess;