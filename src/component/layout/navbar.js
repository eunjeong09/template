import '../../style/default.sass';
import { Collapse } from 'react-bootstrap';
import { Dropdown, Accordion, Card } from 'react-bootstrap';

function Navbar() {
    return (
      <nav >
        {/* <span class="test">sass test</span> */}
        <ul>
          <li>Dashboard</li>
          <li>Basic UI Elements
            <Collapse>
              <ul>
                <li>Buttons</li>
                <li>Dropdowns</li>
              </ul>
            </Collapse>
          </li>
          <li>Form Elements</li>
          <li>Tables</li>
          <li>Icons</li>
          <li>Charts</li>
          <li>User Pages</li>
          <li>Error Pages</li>
        </ul>

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
            <Accordion.Toggle variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </nav>

      
    );
  }
  
  export default Navbar;