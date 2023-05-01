// import axios from "axios";

// const API_KEY = "67c3e14daad0be4c015c";
// const API_SECRET =
//   "7a733a6cbeea136559acdc69cae51364afa910a50c02fb3b6bc122a3f80eb41e";

// export async function uploadToPinata(file) {
//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const response = await axios.post(
//       "https://api.pinata.cloud/pinning/pinFileToIPFS",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           pinata_api_key: API_KEY,
//           pinata_secret_api_key: API_SECRET,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
