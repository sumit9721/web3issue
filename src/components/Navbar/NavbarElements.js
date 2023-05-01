// import { findByLabelText } from '@testing-library/react';
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Header = styled.header`
  background: #13274f;
  padding: 24px 12px;
`;

export const LinkSection = styled.div`
  display: flex;
  gap: 12px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  z-index: 1;
  width: 100%;

  max-width: 1100px;
  background: #13274f;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 20px;
`;

export const NavLinks = styled(LinkR)`
  border-radius: 50px;
  background: #d3d3d3;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  white-space: nowrap;
  padding: 10px 0;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
  display: flex; 
  margin-top : 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
   display: none;
`;

export const DropDownHeader = styled("div")`
  border-radius: 50px;
  background: #d3d3d3;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #d3d3d3;
  border: 2px solid #e5e5e5;
  box-sizing: content-box;
  width: 100%;
  color: #010606;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: square;
  margin-bottom: 0.8em;
  border-radius: 50px;
  background: #d3d3d3;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
