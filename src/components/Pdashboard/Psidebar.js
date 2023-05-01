import React from "react";

import styled, { css } from "styled-components";
import {
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./PdashboardElements";

const Psidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Patdetail">Patient's Details</SidebarLink>
          
          <SidebarLink to="/RecordsForPat">Access Record</SidebarLink>
          
          <SidebarLink to="/Grant">Grant access</SidebarLink>
        
          <SidebarLink to="/Revoke">Revoke Access</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </>
  );
};

export default Psidebar;
