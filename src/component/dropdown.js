import { Dropdown, Container, Row, Col } from "react-bootstrap";

function Dropdowns() {
  return (
    <div className="dropdowns component">
      <h2>Dropdowns</h2>
      <div className="bgWhite">
        <h3>Single button dropdowns</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Dropdowns;
