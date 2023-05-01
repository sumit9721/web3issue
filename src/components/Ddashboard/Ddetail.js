import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
import { Container } from './DdashboardElements';
import { FormWrap } from './DdashboardElements';
import { Icon } from './DdashboardElements';
import { FormContent } from './DdashboardElements';
import { Form } from './DdashboardElements';
import { FormH1 } from './DdashboardElements';
import { FormLabel } from './DdashboardElements';
import { FormInput } from './DdashboardElements';
import { FormButton } from './DdashboardElements';
import { Text } from './DdashboardElements';
import styled from 'styled-components';
//import { OuterBox } from './DdashboardElements';

import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'; 

const Ddetail = ({ state }) => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    licenseno: "",
    hname: "",
    faculty: "",
    contact: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDoctorData = async () => {
    try {
      setLoading(true);
      const { provider, signer, contract } = state;
      console.log(contract);
      const from = await signer.getAddress();
      console.log(from);
      const result = await contract.getDoctorDetails();
      setDoctorData({
        name: result[1],
        licenseno: result[2],
        hname: result[3],
        faculty: result[4],
        contact: result[5]
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Error fetching doctor data. Please try again later.");
    }
  };

  useEffect(() => {
    loadDoctorData();
  }, []);

  return (
    <>
      <Container>
        <FormWrap>
          
            <FormContent>
                <Form action="#">
                    <FormH1>Look up into Doctor's detail</FormH1>
                    <FormLabel htmlFor='for'>Account address :</FormLabel>
                    <FormInput type='text' id='address' value={state.account} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormInput type='text' id='name' value={doctorData.name} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>License Number :</FormLabel>
                    <FormInput type='text' id='licenseno' value={doctorData.licenseno} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Hospital Name :</FormLabel>
                    <FormInput type='text' id='hname' value={doctorData.hname} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Faculty :</FormLabel>
                    <FormInput type='text' id='faculty' value={doctorData.faculty} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>
                    <FormLabel htmlFor='to'>Contact :</FormLabel>
                    <FormInput type='text' id='contact' value={doctorData.contact} disabled style={{ fontWeight: 'bold', opacity: '0.9', border: '1px solid #ccc', color: '#000' }}/>

                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                                  
                      
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Ddetail;