// import React from "react";
// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import { Container } from "./PdashboardElements";
// import { FormWrap } from "./PdashboardElements";
// import { Icon } from "./PdashboardElements";
// import { FormContent } from "./PdashboardElements";
// import { Form } from "./PdashboardElements";
// import { FormH1 } from "./PdashboardElements";
// import { FormLabel } from "./PdashboardElements";
// import { FormInput } from "./PdashboardElements";
// import { FormButton } from "./PdashboardElements";
// import { FormWrap1 } from "./PdashboardElements";
// import { Text } from "./PdashboardElements";
// import Footer from "../Footer";
// // import ipfsClient from "ipfs-http-client";
// import { ContractAddress, ContractAbi } from "../../contract";
// import { uploadToPinata } from "../../PinataUploader";

// // const ipfs = ipfsClient("https://ipfs.infura.io");

// const Pupload = () => {
//   const [name, setName] = useState("");

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   alert(`New record was added`);
//   // };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const file = event.target.files[0];
//   //   const added = await ipfs.add(file);
//   //   console.log(added.cid.toString());
//   // };

//   const handleSubmit = async (event) => {
//     const file = event.target.files[0];
//     const cid = await uploadToPinata(file);
//     console.log(cid);
//     console.log("button is pressed");
//   };

//   return (
//     <>
//       <Container>
//         <FormWrap>
//           <FormContent>
//             <Form onSubmit={handleSubmit}>
//               <FormH1>Upload my records</FormH1>
//               <FormLabel htmlFor="for">Name of the Doctor</FormLabel>
//               <FormInput type="name" required />
//               <FormLabel htmlFor="to">Hospital Visit reason</FormLabel>
//               <FormInput type={String} required />
//               <FormLabel htmlFor="to">Visited Date</FormLabel>
//               <FormInput type="date" required />
//               <FormLabel htmlFor="to">Summary</FormLabel>
//               <FormInput type={String} required />
//               {/* <FormLabel htmlFor="myfile">Choose File</FormLabel>
//               <FormInput type="file" id="myfile" name="myfile" required /> */}
//               <FormButton type="submit">Add record</FormButton>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//   );
// };

// export default Pupload;
