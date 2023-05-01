// import { findByLabelText } from '@testing-library/react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 
import {FaTimes} from 'react-icons/fa'

export const Nav = styled.nav`
 background: #050A30;
 height: 80px;
//  margin-top: -80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index:10;

 @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
 }
`;

export const NavbarContainer = styled.div`
 display:flex;
 justify-content: space-between;
 height: 80px;
 z-index:1;
 width: 100%;
 padding: 0 24px;
 max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 margin-left: 24px;
 font-weight: bold;
 text-decoration: none;
`;

export const SidebarContainer = styled.div`
 position: fixed;
 z-index: 999;
 width: 20%;
 height: 100%;
 background: #050A30;
 display: grid;
 align-items: center;
 top: 1000;
 left: 0;
 transition: 0.3s ease-in-out;

`;

export const SidebarWrapper = styled.div`
 color: #fff;
`;

export const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 80px);
 text-align: center;

 @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,60px);
 }
 `;

 export const SidebarLink = styled(LinkR)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.3rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer;
 position : relative;
 
 &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
 }
`;

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 margin-right: 5px;
 }
`;

export const NavBtnLink = styled(LinkR)`
 border-radius: 50px;
 background: #01bf71;
 white-space: nowrap;
 padding: 10px 22px;
 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 

 &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
 }
`;

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: Linear-gradient(
    108deg,
    rgba(1, 1, 86, 1)0%,
    rgba(10, 201, 122, 1)100%
  );
`;



export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
   height: 80%;
  }
`;

export const FormWrap1 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
   height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #7EC8E3;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #0D324D;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 250px auto 250px auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: #7EC8E3;

  @media screen and (max-width:500px){
    padding: 32px 32px;

  
  }
`;

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 12px 16px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;


export const FormError = styled.div`
  background-color: #dc3545;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #dc3545;
  border-radius: 4px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSuccess = styled.div`
  background-color: #dc3545;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #dc3545;
  border-radius: 4px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;




export const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const CardSubtitle = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const CardLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;


