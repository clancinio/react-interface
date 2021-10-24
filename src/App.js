import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import ListGroup from "react-bootstrap/ListGroup";
import AppointmentInfo from "./components/AppointmentInfo";
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
        {appointmentList.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
