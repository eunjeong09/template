import '../../style/default.sass';
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Dropdown, Accordion, Card, Button } from 'react-bootstrap';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [openBasicUiElement, setOpenBasicUiElement] = useState(false);


    return (
      <nav >
        {/* <span class="test">sass test</span> */}
        <ul>
          <li>Dashboard</li>
          <li>
            <span onClick={() => setOpenBasicUiElement(!openBasicUiElement)}
              aria-controls="basicUiElements"
              aria-expanded={openBasicUiElement}>Basic UI Elements</span>
            <Collapse in={openBasicUiElement}>
            <ul id="basicUiElements">
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

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Basic UI Elements
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Buttons</Dropdown.Item>
            <Dropdown.Item href="#">Dropdowns</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>

        {/* <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
            <Accordion.Toggle variant="link" eventKey="0">
              Basic UI Elements
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Buttons</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
      </nav>

      
    );
  }
  
  export default Navbar;