import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
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
import styled from 'styled-components';
//import { OuterBox } from './PharmaElements';

import { useState, useEffect } from 'react';

const PharmaDetail = ({ state }) => {
  const [pharmacyData, setPharmacyData] = useState({
    name: "",
    contact: "",
    address: "",
    location: "",
    licenseno: ""
    
    
    
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadPharmacyData = async () => {
    try {
      setLoading(true);
      const { provider, signer, contract } = state;
      console.log(contract);
      const result = await contract.getPharmacyDetails();
      setPharmacyData({
        
        name: result[1],
        contact: result[2],
        address: result[3],
        location: result[4],
        licenseno: result[5]   
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching pharmacy data. Please try again later.");
    }
  };

  useEffect(() => {
    loadPharmacyData();
  }, []);
  return (
    <>
      <Container>
        <FormWrap>
          
            <FormContent>
                <Form action="#">
                    <FormH1>Look up into Pharmacy's detail</FormH1>
                    <FormLabel htmlFor='for'>Account address :</FormLabel>
                    <FormInput type='text' id='address' value={pharmacyData.address} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormInput type='text' id='name' value={pharmacyData.name} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Liscence Number :</FormLabel>
                    <FormInput type='text' id='license' value={pharmacyData.licenseno} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Contact :</FormLabel>
                    <FormInput type='text' id='contact' value={pharmacyData.contact} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                                  
                      
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default PharmaDetail;