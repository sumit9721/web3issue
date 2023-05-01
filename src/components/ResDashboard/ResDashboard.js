import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./ResdashboardElement";
import { NavLogo } from "./ResdashboardElement";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./ResdashboardElement";
import { SidebarWrapper } from "./ResdashboardElement";
import { SideBtnWrap } from "./ResdashboardElement";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import Ressidebar from "./Ressidebar";

import { useHistory, useNavigate } from 'react-router-dom';

const ResDashboard = ({state, toggle}) => {
  console.log(state);
  const toggleHome = () => {
     scroll.scrollToTop()
  }

  const navigate = useNavigate();


 const resLogout = async(event)=>{
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
                <NavBtnLink to="/" onClick={resLogout} >Log out</NavBtnLink>
            </NavBtn>         
        </NavbarContainer>
      </Nav> 
      <SidebarContainer>
        <Ressidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default ResDashboard;
