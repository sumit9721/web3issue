import React from "react";
//import { Container, Title, FormWrap } from './DdashboardElements';
import { Container } from "./PdashboardElements";
import { FormWrap } from "./PdashboardElements";
import { Icon } from "./PdashboardElements";
import { FormContent } from "./PdashboardElements";
import { Form } from "./PdashboardElements";
import { FormH1 } from "./PdashboardElements";
import { FormLabel } from "./PdashboardElements";
import { FormInput } from "./PdashboardElements";
import { FormButton } from "./PdashboardElements";
import { Text } from "./PdashboardElements";
import styled from "styled-components";
//import { OuterBox } from './PdashboardElements';

import { useState, useEffect } from "react";

import PatientCard from "./PatientCard"; // import the PatientCard component
import { Spinner } from "react-bootstrap"; // import the Spinner component from react-bootstrap

const RecordsByPat = ({ state }) => {
  const [patientRecords, setPatientRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPatientRecords = async () => {
      const { provider, signer, contract } = state;
      console.log(contract);
      const records = await contract.getPatientRecordsbyP();
      const unames = records[0];
      const reasons = records[1];
      const visitedDates = records[2];
      const summaries = records[3];

      const recordsArray = [];
      for (let i = 0; i < unames.length; i++) {
        recordsArray.push({
          uploader: unames[i],
          reason: reasons[i],
          visitedDate: visitedDates[i],
          summary: summaries[i],
        });
      }

      setPatientRecords(recordsArray);
      setIsLoading(false);
    };

    fetchPatientRecords();
  }, [state]);
  console.log(patientRecords.length);
  console.log(patientRecords);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : patientRecords.length === 0 ? (
        <p style={{ fontSize: "2rem", textAlign: "center" }}>No records found.</p>
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
    </div>
  );
};

export default RecordsByPat;
