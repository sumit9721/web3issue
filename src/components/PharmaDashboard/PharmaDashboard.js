import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './PharmaElements';
import { NavLogo } from './PharmaElements';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './PharmaElements';
import { SidebarWrapper } from './PharmaElements';
import { SideBtnWrap } from './PharmaElements';
import { animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 
import {FaTimes} from 'react-icons/fa'
import Dsidebar from '../Ddashboard/Dsidebar'
import Pharmasidebar from './Pharmasidebar';

import { useHistory, useNavigate } from 'react-router-dom';



const Pharmadashboard = ({state, toggle}) => {
  console.log(state);
  const toggleHome = () => {
     scroll.scrollToTop()
  }

  const navigate = useNavigate();


 const pharmacyLogout = async(event)=>{
   event.preventDefault();
   const { provider, signer, contract } = state;
   console.log(contract);
   console.log(provider);
   const transaction = await contract.logOut();
   navigate("/");

 }

  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              MRS
            </NavLogo> 
            <NavBtn>
                <NavBtnLink to="/" onClick={pharmacyLogout} >Log out</NavBtnLink>
            </NavBtn>         
        </NavbarContainer>
      </Nav> 
      <SidebarContainer>
        <Dsidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default Pharmadashboard;

