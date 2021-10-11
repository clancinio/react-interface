import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";

function App() {
  return (
    <div className="container mt-3 ">
      <h1 className="mb-5">
        <BiArchive className="" /> Your appointments
      </h1>
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;
