import React from "react";
import "./App.css";

// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Sidebar from './components/Sidebar';
import { Routes } from "react-router-dom";
import Home from "./pages";

import SignupPage from "./pages/signup";
import SignupdocPage from "./pages/signupDoc";
import SignupPharmapage from "./pages/signupPharma";
import SignupLabpage from "./pages/SignupLab";
import SignupInpage from "./pages/signupIn";
import SignupRespage from "./pages/signupRes";

import PatPage from "./pages/PatEntry";
import DocPage from "./pages/DocEntry";
import LabPage from "./pages/LabEntry";
import PharmaPage from "./pages/PharmaEntry";
import InPage from "./pages/InEntry";
import ResPage from "./pages/ResEntry";


import PatDashboard from "./pages/PatDashboard";
import DocDashboard from "./pages/DocDashboard";
import PharDashboardpage from "./pages/PharDashboard";
import LabDashboardpage from "./pages/LabDashboard";
import InDashboardpage from "./pages/InDashboard";
import ResDashboardpage from "./pages/ResDashboard";

import Patdetail from "./pages/Patdetail";
import Docdetail from "./pages/Docdetail";
import Phardetail from "./pages/Phardetail";
import Labdetail from "./pages/Labdetail";
import Indetail from "./pages/Indetail";
import Resdetail from "./pages/Resdetail";



//import Pataccess from "./pages/Pataccess";
import Docaccess from "./pages/Docaccess";
import PharAccess from "./pages/PharAccess";
import LabAccess from "./pages/LabAccess";
import InAccess from "./pages/InAccess";
import ResAccess from "./pages/ResAccess";

import RecordsForPatPage from "./pages/RecordsForPat";
import RecordsForDocPage from "./pages/RecordsForDoc";
import RecordsForPharmaPage from "./pages/RecordsForPharma";
import RecordsForLabPage from "./pages/RecordsForLab";
import RecordsForInPage from "./pages/RecordsForIn";
import RecordsForResPage from "./pages/RecordsForRes";

import DocUpload from "./pages/DocUpload";
import PharUpload from "./pages/PharUpload";
import LabUploadpage from "./pages/LabUpload";

import InUploadpage from "./pages/InUpload";
import ResUploadpage from "./pages/ResUpload";

import Grant from "./pages/Grant";
import Revoke from "./pages/Revoke";

//import PatUpload from "./pages/PatUpload";

//import PatientLogout from "./pages/PatLogout";

//import Navbar from './components/Pdashboard/Pdashboard.js';

import { ContractAbi } from "./contract.js";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers"

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  
  
  const [account, setAccount] = useState("None");
  
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x3Ff130e2de6A8e3Ae7121b62A35F839676dC61aa";
      const contractABI = ContractAbi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          // window.ethereum.on("accountsChanged", () => {
          //   window.location.reload();
          // });

           const provider = new ethers.providers.Web3Provider(window.ethereum);

          const signer = provider?.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider,signer, contract });
          const from = await signer.getAddress();
          console.log(from);
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  useEffect(() => {
    console.log("STATE : ",state
    );
  }, [state]);
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x3Ff130e2de6A8e3Ae7121b62A35F839676dC61aa";
      const contractABI = ContractAbi;
      try {
        const { ethereum } = window;
  
        if (ethereum) {
          await ethereum.request({ method: "eth_requestAccounts" });
  
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
           window.ethereum.on("accountsChanged", async (accounts) => {
            //  const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545");
            
            const updatedSigner = provider.getSigner(ethereum.selectedAddress);
            const updatedContract = new ethers.Contract(
              contractAddress,
              contractABI,
              updatedSigner
              );
              setState({
                provider,
                signer: updatedSigner,
                contract: updatedContract,
              });
              const from = await updatedSigner.getAddress();
            setAccount(from);
            console.log("Account updated:", from);
            localStorage.setItem("currentAccount", from); // Save the account to localStorage
          });
  
          //  const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545");
          //const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          const from = await signer.getAddress();
          setAccount(from);
          setState({ provider, signer, contract });
          console.log(from, 'currentAccount');
       {/*
         // Check if there is a currentAccount in localStorage
          const currentAccount = localStorage.getItem("currentAccount");
        if (currentAccount) {
          setAccount(currentAccount);
        }*/}
        } else {
          alert("Please install Metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    connectWallet();
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignupPage state={state} />}  />
        <Route path="/signupDoc" element={<SignupdocPage state={state} />} />
        <Route path="/signupPharma" element={<SignupPharmapage state={state}/>} />
        <Route path="/SignupLab" element={<SignupLabpage state={state}/>} />
        <Route path="/SignupIn" element={<SignupInpage state={state}/>} />
        <Route path="/SignupRes" element={<SignupRespage state={state}/>} />

        <Route path="/PatEntry" element={<PatPage state={state} />} />
        <Route path="/DocEntry" element={<DocPage  state={state} />} />
        <Route path="/PharmaEntry" element={<PharmaPage state={state}/>} />
        <Route path="/LabEntry" element={<LabPage state={state}/>} />
        <Route path="/InEntry" element={<InPage state={state}/>} />
        <Route path="/ResEntry" element={<ResPage state={state}/>} />
     
        <Route path="/PatDashboard" element={<PatDashboard state={state}/>} />
        <Route path="/DocDashboard" element={<DocDashboard state={state}/>} />
        <Route path="/PharmaDashboard" element={<PharDashboardpage state={state}/>} />
        <Route path="/LabDashboard" element={<LabDashboardpage state={state}/>} />
        <Route path="/InDashboard" element={<InDashboardpage state={state}/>} />
        <Route path="/ResDashboard" element={<ResDashboardpage state={state}/>} />

        <Route path="/Patdetail" element={<Patdetail state={state} />} />
        <Route path="/Docdetail" element={<Docdetail state={state} />} />
        <Route path="/Pharmadetail" element={<Phardetail state={state}/>} />
        <Route path="/Labdetail" element={<Labdetail state={state}/>} />
        <Route path="/Indetail" element={<Indetail state={state}/>} />
        <Route path="/Resdetail" element={<Resdetail state={state}/>} />

        
        <Route path="/DocAccess" element={<Docaccess state={state}/>} />
        <Route path="/PharmaAccess" element={<PharAccess state={state}/>} />
        <Route path="/LabaccessRec" element={<LabAccess state={state}/>} />
        <Route path="/InaccessRec" element={<InAccess state={state}/>} />
        <Route path="/ResaccessRec" element={<ResAccess />} />

        <Route path="/RecordsForPat" element={<RecordsForPatPage state={state}/>} />
        <Route path="/RecordsForDoc" element={<RecordsForDocPage state={state}/>} />
        <Route path="/RecordsForPharma" element={<RecordsForPharmaPage state={state}/>} />
        <Route path="/RecordsForLab" element={<RecordsForLabPage state={state}/>} />
        <Route path="/RecordsForIn" element={<RecordsForInPage state={state}/>} />
        <Route path="/RecordsForRes" element={<RecordsForResPage state={state}/>} />

        <Route path="/Grant" element={<Grant state={state} />} />
        <Route path="/Revoke" element={<Revoke state={state} />} />

        <Route path="/Uploadrec" element={<DocUpload state={state}/>} />
        {/* <Route path="/UploadPrec" element={<PatUpload />} /> */}
        <Route path="/PharmaUpload" element={<PharUpload state={state}/>} />
        <Route path="/LabUploadrec" element={<LabUploadpage state={state}/>} />
        <Route path="/InUploadrec" element={<InUploadpage state={state}/>} />
        <Route path="/ResUploadrec" element={<ResUploadpage state={state}/>} />


        {/*<Route path="/PatLogout" element={<PatLogout state={state} />} />*/}

      

        <Route path="/logout" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
