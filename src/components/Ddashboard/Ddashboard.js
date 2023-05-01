import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './DdashboardElements';
import { NavLogo } from './DdashboardElements';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './DdashboardElements';
import { SidebarWrapper } from './DdashboardElements';
import { SideBtnWrap } from './DdashboardElements';
import { animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR, Navigate } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 
import {FaTimes} from 'react-icons/fa';
import Dsidebar from '../Ddashboard/Dsidebar';
import { useHistory, useNavigate } from 'react-router-dom';



const Ddashboard = ({state, toggle}) => { 
  const toggleHome = () => {
     scroll.scrollToTop()
  }
  const navigate = useNavigate();


 const doctorLogout = async(event)=>{
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
                <NavBtnLink to="/" onClick={doctorLogout} >Log out</NavBtnLink>
            </NavBtn>         
        </NavbarContainer>
      </Nav> 
      <SidebarContainer>
        <Dsidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default Ddashboard;

