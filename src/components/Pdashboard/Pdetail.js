import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
import { Container } from './PdashboardElements';
import { FormWrap } from './PdashboardElements';
import { Icon } from './PdashboardElements';
import { FormContent } from './PdashboardElements';
import { Form } from './PdashboardElements';
import { FormH1 } from './PdashboardElements';
import { FormLabel } from './PdashboardElements';
import { FormInput } from './PdashboardElements';
import { FormButton } from './PdashboardElements';
import { Text } from './PdashboardElements';
import styled from 'styled-components';
//import { OuterBox } from './PdashboardElements';

import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'; 

const Pdetail = ({state}) => {
  const [patientData, setPatientData] = useState({
    name: "",
    phone: "",
    gender: "",
    dob: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadPatientData = async () => {
    const { provider, signer, contract } = state;
    console.log(contract);
    console.log('Account Address:', state.account);
    
    try {
      setLoading(true);
      const result = await contract.getPatientDetails();
      setPatientData({
        name: result[0],
        phone: result[1],
        gender: result[2],
        dob: result[3]
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching patient data. Please try again later.");
    }
  };

  useEffect(() => {
    loadPatientData();
  }, []);

  return (
    <>
      <Container>
        <FormWrap>          
          <FormContent>
            <Form >
              <FormH1>Look up into Patient's detail</FormH1>
              <FormLabel htmlFor='for'>Account address :</FormLabel> 
              <FormInput type='text' id='address' value={state.account} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
              <FormLabel htmlFor='to'>Name :</FormLabel>
              <FormInput type='text' id='name' value={patientData.name} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
              <FormLabel htmlFor='to'>Phone Number :</FormLabel>
              <FormInput type='text' id='phone' value={patientData.phone} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
              <FormLabel htmlFor='to'>Gender :</FormLabel>
              <FormInput type='text' id='gender' value={patientData.gender} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
              <FormLabel htmlFor='to'>DOB :</FormLabel>
              <FormInput type='text' id='dob' value={patientData.dob} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Pdetail;