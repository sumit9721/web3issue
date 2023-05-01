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
} from "./IndashboardElement";
import { NavLogo } from "./IndashboardElement";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./IndashboardElement";
import { SidebarWrapper } from "./IndashboardElement";
import { SideBtnWrap } from "./IndashboardElement";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import Insidebar from "./Insidebar";


import { useState, useEffect } from 'react';


import PatientCard from './PatientCard'; // import the PatientCard component
import { Spinner } from 'react-bootstrap'; // import the Spinner component from react-bootstrap

const RecordsByIn = (props) => {
    const [patientRecords, setPatientRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const { records } = props.location.state;
      setPatientRecords(records);
      setIsLoading(false);
    }, [props.location.state]);
  
    return (
      <>
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            {patientRecords.map((record, index) => (
              <PatientCard
                key={index}
                uploader={record.uploader}
                reason={record.reason}
                visitedDate={record.visitedDate}
                summary={record.summary}
              />
            ))}
          </>
        )}
      </>
    );
  };

  export default RecordsByIn;