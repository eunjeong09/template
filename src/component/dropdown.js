import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  SplitButton,
  Container,
  Row,
  Col,
} from "react-bootstrap";

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

        <hr />

        <p>
          DropdownButton will forward Button props to the underlying Toggle
          component
        </p>
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          )
        )}

        <hr />
        <Container>
          <Row>
            <Col>
              <h3>Sizes</h3>
              <p>Dropdowns work with buttons of all sizes.</p>
              <div className="mb-2">
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    title="Drop large"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownType>
                ))}
              </div>
              <div>
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    variant="secondary"
                    title="Drop small"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownType>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dropdowns;
