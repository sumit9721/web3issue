import React from "react";
//import { Container, Title, FormWrap } from './DdashboardElements';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
} from "./IndashboardElement";
// import { FormWrap } from './DdashboardElements';
//import { Icon } from './DdashboardElements';
// import { FormContent } from './DdashboardElements';
// import { Form } from './DdashboardElements';
// import { FormH1 } from './DdashboardElements';
// import { FormLabel } from './DdashboardElements';
// import { FormInput } from './DdashboardElements';
// import { FormButton } from './DdashboardElements';
// import { Text } from './DdashboardElements';
// import styled from 'styled-components';
//import { OuterBox } from './DdashboardElements';
import { FormInput } from './IndashboardElement';

import { useState, useEffect } from 'react';

const InDetail = ({ state }) => {
  const [insuranceData, setInsuranceData] = useState({
    name: "",
    contact: "",
    location: "",
    address: "",
    licenseno: ""
  
    
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadInsuranceData = async () => {
    try {
      setLoading(true);
      const { provider, signer, contract } = state;
      console.log(contract);
      const result = await contract.getInsuranceDetails();
      setInsuranceData({
        
        name: result[1],
        contact: result[2],
        location: result[3],
        address: result[4], 
        licenseno: result[5]   
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching insurance data. Please try again later.");
    }
  };

  useEffect(() => {
    loadInsuranceData();
  }, []);
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Look up into Insurance detail</FormH1>
              <FormLabel htmlFor='for'>Account address :</FormLabel>
                    <FormInput type='text' id='address' value={insuranceData.address} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormInput type='text' id='name' value={insuranceData.name} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Liscence Number :</FormLabel>
                    <FormInput type='text' id='license' value={insuranceData.licenseno} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Contact :</FormLabel>
                    <FormInput type='text' id='contact' value={insuranceData.contact} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                                  
                      
                </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default InDetail;
