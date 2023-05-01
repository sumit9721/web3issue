import React from "react";
//import { Container, Title, FormWrap } from './DdashboardElements';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
} from "./ResdashboardElement";
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
import { FormInput } from './ResdashboardElement';

import { useState, useEffect } from 'react';

const ResDetail = ({ state }) => {
  const [researcherData, setResearcherData] = useState({
    name: "",
    contact: "",
    affiliation: "",
    address: ""
    
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadResearcherData = async () => {
    try {
      setLoading(true);
      const { provider, signer, contract } = state;
      console.log(contract);
      const result = await contract.getResearcherDetails();
      setResearcherData({
        
        name: result[1],
        contact: result[2],
        affiliation: result[3],
        address: result[4]
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching researcher data. Please try again later.");
    }
  };

  useEffect(() => {
    loadResearcherData();
  }, []);
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Look up into Insurance detail</FormH1>
              <FormLabel htmlFor='for'>Account address :</FormLabel>
                    <FormInput type='text' id='address' value={researcherData.address} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormInput type='text' id='name' value={researcherData.name} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Contact :</FormLabel>
                    <FormInput type='text' id='contact' value={researcherData.licenseno} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Affiliation :</FormLabel>
                    <FormInput type='text' id='affliation' value={researcherData.contact} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                                  
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ResDetail;
