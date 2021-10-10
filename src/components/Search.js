import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import { Form } from "react-bootstrap";

function Search() {
  return (
    <Form>
      <InputGroup className="mb-3 mt-4">
        <FormControl aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Sort By"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </Form>
  );
}

export default Search;
