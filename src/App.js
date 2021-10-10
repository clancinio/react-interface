import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";

function App() {
  return (
    <div className="container mt-3">
      <h1 className="text-5xl">
        <BiArchive className="" /> Your appointments
      </h1>
      <Search />
    </div>
  );
}

export default App;
