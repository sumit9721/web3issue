import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './LabdashboardElement';
import { NavLogo } from './LabdashboardElement';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './LabdashboardElement';
import { SidebarWrapper } from './LabdashboardElement';
import { SideBtnWrap } from './LabdashboardElement';
import { animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 
import {FaTimes} from 'react-icons/fa'
import Labsidebar from './Labsidebar';

import { useHistory, useNavigate } from 'react-router-dom';



const LabDashboard = ({state, toggle}) => {
  console.log(state);
  const toggleHome = () => {
     scroll.scrollToTop()
  }
  const navigate = useNavigate();


 const labLogout = async(event)=>{
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
                <NavBtnLink to="/" onClick={labLogout}>Log out</NavBtnLink>
            </NavBtn>         
        </NavbarContainer>
      </Nav> 
      <SidebarContainer>
        <Labsidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default LabDashboard;

