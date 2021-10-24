import { BiCalendarPlus } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AddComponent() {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setToggleForm(!toggleForm)}
          className="mb-3"
        >
          <BiCalendarPlus className="mr-2" /> Add Appointment
        </Button>
      </div>

      {toggleForm && (
        <Form className="mb-5 p-3 border border-secondary rounded">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Owner Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Pet Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Date
            </Form.Label>
            <Col sm="10">
              <Form.Control type="date" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Date
            </Form.Label>
            <Col sm="10">
              <Form.Control type="time" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Appointment notes
            </Form.Label>
            <Col sm="10">
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Form.Group>
          <Button className="float-right" variant="primary">
            Add
          </Button>{" "}
        </Form>
      )}
    </>
  );
}

export default AddComponent;
