// import React, { useState } from "react";
// import { FaBars, FaEthereum } from "react-icons/fa";
// import { ethers } from "ethers";
// import {
//   Nav,
//   NavbarContainer,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElements";
// import {
//   Main,
//   DropDownContainer,
//   DropDownHeader,
//   DropDownListContainer,
//   DropDownList,
//   ListItem,
// } from "./NavbarElements";
// import { NavLogo } from "./NavbarElements";
// import { animateScroll as scroll } from "react-scroll";

// const Navbar = ({ toggle }) => {
//   //const options = ["Mangoes", "Apples", "Oranges"];
//   const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
//   const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const toggling = () => setIsOpen(!isOpen);
//   const Goggling = () => setIsOpen(!isOpen);

//   const onOptionClicked = (value) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//     console.log(selectedOption);
//   };
//   const toggleHome = () => {
//     scroll.scrollToTop();
//   };

//   const connectbutton = () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
//       // Return the address of the wallet
//       console.log(res);
//     });
//   };

//   return (
//     <>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo to="/" onClick={toggleHome}>
//             MRS
//           </NavLogo>
//           <MobileIcon onClick={toggle}>
//             <FaBars />
//           </MobileIcon>
//           <NavMenu>
//             {/* <NavItem>
//                     <NavLinks to='about'>About</NavLinks>
//                 </NavItem> */}
//             <NavItem>
//               <NavLinks to="/" onClick={connectbutton}>
//                 Connect WALLET
//               </NavLinks>
//             </NavItem>
//           </NavMenu>

//           <DropDownContainer>
//             <DropDownHeader onClick={toggling}>Register as... </DropDownHeader>
//             {isOpen && (
//               <DropDownListContainer>
//                 <DropDownList>
//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/signupDoc">Doctor</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/signup">Patient</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/signupPharma">Pharmacy</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/signupLab">Laboratory</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/signupRes">Researchers</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/signupIn">Insurance</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>
//                 </DropDownList>
//               </DropDownListContainer>
//             )}
//           </DropDownContainer>

//           {/* <DropDownContainer>
//             <DropDownHeader onClick={Goggling}>sign In as... </DropDownHeader>
//             {isOpen && (
//               <DropDownListContainer>
//                 <DropDownList>
//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/DocEntry">Doctor</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/PatEntry">Patient</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/PharmaEntry">Pharmacy</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/LabEntry">Laboratory</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/ResEntry">Researchers</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>

//                   <ListItem>
//                     <NavBtn>
//                       <NavBtnLink to="/InEntry">Insurance</NavBtnLink>
//                     </NavBtn>
//                   </ListItem>
//                 </DropDownList>
//               </DropDownListContainer>
//             )}
//           </DropDownContainer> */}
//         </NavbarContainer>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FaBars, FaEthereum } from "react-icons/fa";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { animateScroll as scroll } from "react-scroll";
import { Dropdown, Space, Button } from "antd";
import useWindowSize from "../../Hooks/useWindowSize";
import {
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Header,
  LinkSection,
} from "./NavbarElements";
import { NavLogo } from "./NavbarElements";

import { ContractAbi }from "../../contract.js";
import { ethers } from "ethers";

const registerDropdownItems = [
  {
    key: "1",
    label: <NavBtnLink to="/signup">Patient</NavBtnLink>,
  },
  {
    key: "2",
    label: <NavBtnLink to="/signupDoc">Doctor</NavBtnLink>,
  },
  {
    key: "3",
    label: <NavBtnLink to="/signupPharma">Pharmacy</NavBtnLink>,
  },
  {
    key: "4",
    label: <NavBtnLink to="/signupLab">Laboratory</NavBtnLink>,
  },
  {
    key: "5",
    label: <NavBtnLink to="/signupIn">Insurance</NavBtnLink>,
  },
  {
    key: "6",
    label: <NavBtnLink to="/signupRes">Researchers</NavBtnLink>,
  },
];

const signinDropdownItems = [
  {
    key: "1",
    label: <NavBtnLink to="/PatEntry">Patient</NavBtnLink>,
  },
  {
    key: "2",
    label: <NavBtnLink to="/DocEntry">Doctor</NavBtnLink>,
  },
  {
    key: "3",
    label: <NavBtnLink to="/PharmaEntry">Pharmacy</NavBtnLink>,
  },
  {
    key: "4",
    label: <NavBtnLink to="/LabEntry">Laboratory</NavBtnLink>,
  },
  {
    key: "4",
    label: <NavBtnLink to="/InEntry">Insurance</NavBtnLink>,
  },
  {
    key: "4",
    label: <NavBtnLink to="/ResEntry">Researchers</NavBtnLink>,
  },
];

const Navbar = ({ toggle }) => {
  const { width } = useWindowSize();

  const toggleHome = () => {
    scroll.scrollToTop();
  };
 
  const connectbutton = () => {
    
  }
  /*const connectbutton = () => {
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      // Return the address of the wallet
      console.log(res);
    });
  };*/

  /*const connectbutton = async () => {
    try {
      // Request access to the user's Ethereum accounts
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      // Create a new provider using the Ganache RPC URL
      const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545");
      
      // Obtain a signer using the selected Ethereum account
      const signer = provider.getSigner(accounts[0]);
      
      // Log the selected account address to the console
      console.log("Selected account:", await signer.getAddress());
      
      // Now you can interact with your deployed contract using the provider and signer
      // For example, you can get the contract's current balance
      const contractAddress = "0x44F6981293FB89088c8be5E087a3eC8d4c0DFaf6";
      const contractABI = ContractAbi;
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const balance = await contract.getBalance();
      console.log("Contract balance:", ethers.utils.formatEther(balance));
      
    } catch (error) {
      console.error(error);
    }
  }*/
  if (width <= 612) {
    return (
      <Header>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            MRS
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Header>
    );
  }

  
  return (
    <Header>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          MRS
        </NavLogo>
        <LinkSection>
          <Dropdown
            menu={{
              items: registerDropdownItems,
            }}
          >
            <div>
              <Space>
                <Button>
                  Register as
                  <DownOutlined />
                </Button>
              </Space>
            </div>
          </Dropdown>
          <Dropdown
            menu={{
              items: signinDropdownItems,
            }}
          >
            <div>
              <Space>
                <Button>
                  Login as
                  <DownOutlined />
                </Button>
              </Space>
            </div>
          </Dropdown>

          <Button onClick={connectbutton}>Connect WALLET</Button>
        </LinkSection>
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;
