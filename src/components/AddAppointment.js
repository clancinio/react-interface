// import { BiCalendarPlus } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddComponent() {
  return (
    <Form className="mb-5 p-3 border border-secondary rounded">
      <Row className="form-header">
        <h2>Add Appointment</h2>
      </Row>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Owner Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Pet Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Date
        </Form.Label>
        <Col sm="10">
          <Form.Control type="date" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Date
        </Form.Label>
        <Col sm="10">
          <Form.Control type="time" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Appointment notes
        </Form.Label>
        <Col sm="10">
          <Form.Control as="textarea" rows={3} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default AddComponent;
