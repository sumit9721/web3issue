import React from 'react';

import { Nav, NavbarContainer ,  MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './PdashboardElements';
import { NavLogo } from './PdashboardElements';
import { SidebarContainer, Icon, CloseIcon,  SidebarMenu, SidebarLink, SidebarRoute} from './PdashboardElements';
import { animateScroll as scroll} from 'react-scroll';
import Psidebar from './Psidebar';

import { useHistory, useNavigate } from 'react-router-dom';



const Pdashboard = ({toggle, state}) => {
  
  const toggleHome = () => {
     scroll.scrollToTop()
  }
  const navigate = useNavigate();

  const patientLogout = async(event)=>{
    event.preventDefault();
    console.log(state, 'pdas');
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
                <NavBtnLink to="/" onClick={patientLogout}>Log out</NavBtnLink>
            </NavBtn>            
        </NavbarContainer>
      </Nav> 
      <SidebarContainer>
        <Psidebar />
      </SidebarContainer>
               
    
    </>
  );
};

export default Pdashboard;

