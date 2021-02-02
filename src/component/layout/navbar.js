import "../../style/default.sass";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Dropdown, Accordion, Card, Button } from "react-bootstrap";

function Navbar() {
  const [open, setOpen] = useState(false);

  // 이 부분 해결법을 찾아야함
  const [openBasicUiElement, setOpenBasicUiElement] = useState(false);
  const [openFormElement, setOpenFormElement] = useState(false);
  const [openTables, setOpenTables] = useState(false);
  const [openCharts, setOpenCharts] = useState(false);
  const [openUserPage, setOpenUserPage] = useState(false);
  const [openErrorPage, setOpenErrorPage] = useState(false);


  //active에 대한 함수가 따로 필요(active는 오른쪽에 보여지는 페이지)

  

  return (
    <nav>
      {/* <span class="test">sass test</span> */}
      <ul>
        <li>Dashboard</li>
        <li>
          <span
            onClick={() => setOpenBasicUiElement(!openBasicUiElement)}
            aria-expanded={openBasicUiElement}
          >
            Basic UI Elements
          </span>
          <Collapse in={openBasicUiElement}>
            <ul>
              <li>Buttons</li>
              <li>Dropdowns</li>
            </ul>
          </Collapse>
        </li>

        <li>
          <span 
            onClick={() => setOpenFormElement(!openFormElement)}
            aria-expanded={openFormElement}
          >
            Form Elements
          </span>

          <Collapse in={openFormElement}>
            <ul>
              <li>Basic Elements</li>
            </ul>
          </Collapse>
        </li>
        <li>
          <span  
            onClick={() => setOpenTables(!openTables)}
            aria-expanded={openTables}
          >
            Tables
          </span>
          <Collapse in={openTables}>
            <ul>
              <li>Basic Tables</li>
            </ul>
          </Collapse>
        </li>
        <li>Icons</li>
        <li>
          <span
            onClick={() => setOpenCharts(!openCharts)}
            aria-expanded={openCharts}
          >
            Charts
          </span>
          <Collapse in={openCharts}>
            <ul>
              <li>ChartJS</li>
            </ul>
          </Collapse>
        </li>
        <li>
          <span
            onClick={() => setOpenUserPage(!openUserPage)}
            aria-expanded={openUserPage}
          >User Pages
          </span>
          <Collapse in={openUserPage}>
            <ul>
              <li>400</li>
              <li>500</li>
            </ul>
          </Collapse>
          </li>
        <li>
          <span
            onClick={() => setOpenErrorPage(!openErrorPage)}
            aria-expanded={openErrorPage}
          >Error Pages</span>
          <Collapse in={openErrorPage}>
            <ul>
              <li>400</li>
              <li>500</li>
            </ul>
          </Collapse>
        </li>
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
