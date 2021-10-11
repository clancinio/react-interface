import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import appointmentList from "./data.json";

function App() {
  return (
    <div className="container mt-3 ">
      <h1 className="mb-5">
        <BiArchive className="" /> Your appointments
      </h1>
      <AddAppointment />
      <Search />
      <ListGroup>
        {appointmentList.map((appoinment) => (
          <ListGroup.Item>
            <Card>
              <Card.Header>{appoinment.petName}</Card.Header>
              <Card.Body>
                <Card.Title>Owner: </Card.Title>
                <Card.Text>{appoinment.ownerName}</Card.Text>
                <Card.Title>Appointment Date: </Card.Title>
                <Card.Text>{appoinment.aptDate}</Card.Text>
                <Card.Title>Notes:: </Card.Title>
                <Card.Text>{appoinment.aptNotes}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
