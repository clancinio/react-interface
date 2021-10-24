import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function AppointmentInfo({ appointment }) {
  return (
    <ListGroup.Item>
      <Card>
        <Card.Header>{appointment.petName}</Card.Header>
        <Card.Body>
          <Card.Title>Owner: </Card.Title>
          <Card.Text>{appointment.ownerName}</Card.Text>
          <Card.Title>Appointment Date: </Card.Title>
          <Card.Text>{appointment.aptDate}</Card.Text>
          <Card.Title>Notes:: </Card.Title>
          <Card.Text>{appointment.aptNotes}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
}

export default AppointmentInfo;
