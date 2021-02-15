import { Button } from "react-bootstrap";

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
      </div>
    </div>
  );
}

export default Buttons;
