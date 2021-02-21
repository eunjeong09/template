import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Element() {
  return (
    <div className="element">
      <h2>Elements</h2>
      <div className="bgWhite">
        <h3>Basic Form</h3>
        <p>
          The &lt;FormControl&gt; component renders a form control with
          Bootstrap styling. The &lt;FormGroup&gt; component wraps a form
          control with proper spacing, along with support for a label, help
          text, and validation state. To ensure accessibility, set controlId on
          &lt;FormGroup&gt;, and use &lt;FormLabel&gt; for the label.
        </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <hr />

        <h3>Horizontal Form</h3>
        <Form>
          <Container>
            <Row>
              <Form.Group controlId="formBasicEmail">
                <Col>
                  <Form.Label>Email address</Form.Label>
                </Col>
                <Col xs={5}>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Col>
              </Form.Group>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col xs={5}>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <hr />
        <h3>Size</h3>
        <p>The custom select element supports sizing.</p>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Row>
                  <Form.Label column="lg" lg={2}>
                    Large Text
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Large text"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2}>
                    Normal Text
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Normal text" />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={2}>
                    Small Text
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Small text"
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <hr />
        <h3>Checkboxes and Radios</h3>
        <p>
          For the non-textual checkbox and radio controls, FormCheck provides a
          single component for both types that adds some additional styling and
          improved layout.
        </p>

        <Form>
          {["checkbox", "radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                disabled
                label="3 (disabled)"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
}

export default Element;
