import React from 'react';
import { CardContainer, CardTitle, CardSubtitle, CardText, CardLink, CardButton } from './PdashboardElements';

const PatientCard = ({ uploader, reason, visitedDate, summary }) => {
  return (
    <CardContainer>
      <CardTitle>{uploader}</CardTitle>
      <CardSubtitle>Reason: {reason}</CardSubtitle>
      <CardText>Visited on: {visitedDate}</CardText>
      <CardText>Summary: {summary}</CardText>
      <CardLink href="#">View more</CardLink>
      <CardButton>Update</CardButton>
    </CardContainer>
  );
};

export default PatientCard;