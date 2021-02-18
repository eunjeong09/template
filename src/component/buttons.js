import {
  Button,
  ButtonGroup,
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";

function Buttons() {
  return (
    <div className="buttons component">
      <h2>Buttons</h2>
      <div className="bgWhite">
        <h3>Normal Buttons</h3>
        <p>
          Use any of the available button classes to quickly create a styled
          button.
        </p>

        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>

        <hr />

        <h3>Rounded Buttons</h3>
        <p>
          Add className <em className="red">btnRounded</em>
        </p>

        <Button variant="primary" className="btnRounded">
          Primary
        </Button>
        <Button variant="secondary" className="btnRounded">
          Secondary
        </Button>
        <Button variant="success" className="btnRounded">
          Success
        </Button>
        <Button variant="warning" className="btnRounded">
          Warning
        </Button>
        <Button variant="danger" className="btnRounded">
          Danger
        </Button>
        <Button variant="info" className="btnRounded">
          Info
        </Button>
        <Button variant="light" className="btnRounded">
          Light
        </Button>
        <Button variant="dark" className="btnRounded">
          Dark
        </Button>
        <Button variant="link" className="btnRounded">
          Link
        </Button>

        <hr />

        <h3>Outline buttons</h3>
        <p>
          For a lighter touch, Buttons also come in outline-* variants with no
          background color.
        </p>

        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
        <Button variant="outline-link">Link</Button>

        <hr />

        {/* <Container> */}
        <Row>
          <Col>
            <h3>Sizes</h3>
            <p>
              Fancy larger or smaller buttons? Add{" "}
              <em className="red">size="lg", size="sm"</em> for additional
              sizes.
            </p>
            <div className="mb-2">
              <Button variant="primary" size="lg">
                Large button
              </Button>
              <Button variant="secondary" size="lg">
                Large button
              </Button>
            </div>
            <div>
              <Button variant="primary" size="sm">
                Small button
              </Button>
              <Button variant="secondary" size="sm">
                Small button
              </Button>
            </div>
          </Col>
          <Col>
            <h3>Block Button</h3>
            <p>
              Create block level buttons—those that span the full width of a
              parent—by adding <em className="red">block</em>
            </p>
            <Button variant="primary" size="lg" block>
              Block level button
            </Button>
            <Button variant="secondary" size="lg" block>
              Block level button
            </Button>
          </Col>
        </Row>
        {/* </Container> */}

        <hr />

        <Row>
          <Col>
            <h3>Button groups</h3>
            <p>Wrap a series of &lt;Button&gt;s in a &lt;ButtonGroup&gt;.</p>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Col>
          <Col>
            <h3>Vertical variation</h3>
            <p>
              Make a set of buttons appear vertically stacked rather than
              horizontally, by adding vertical to the &lt;ButtonGroup&gt;. Split
              button dropdowns are not supported here.
            </p>
            <ButtonGroup vertical>
              <Button>Button</Button>
              <Button>Button</Button>

              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-vertical-dropdown-1"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>

              <Button>Button</Button>
              <Button>Button</Button>

              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-vertical-dropdown-2"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                as={ButtonGroup}
                title="Dropdown"
                id="bg-vertical-dropdown-3"
              >
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Buttons;
