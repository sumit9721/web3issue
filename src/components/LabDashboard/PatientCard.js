import React from 'react';
import { CardContainer, CardTitle, CardSubtitle, CardText, CardLink, CardButton } from './LabdashboardElement';
import { Card } from 'react-bootstrap';

const PatientCard = ({ uploader, reason, visitedDate, summary }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{reason}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{visitedDate}</Card.Subtitle>
        <Card.Text>{summary}</Card.Text>
        <Card.Footer className="text-muted">{uploader}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default PatientCard;