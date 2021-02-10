import "../../style/default.sass";
import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import { Dropdown, Accordion, Card, Button } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


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
  const [active, setActive] = useState('dashboard');


  //link가 클릭되면 path의 정보가 업데이트 되어서 App.js가 다시 호출되도록 - 테스트 필요
  const updateActive = (props) => {
    setActive('test');
  
  }


  

  return (
    <Router>
      <nav>
        {/* <span class="test">sass test</span> */}
        <ul>
          <Link to="/dashboard" onClick={updateActive}>
            <li>Dashboard</li>
          </Link>
          <li>
            <span
              onClick={() => setOpenBasicUiElement(!openBasicUiElement)}
              aria-expanded={openBasicUiElement}
            >
              Basic UI Elements
            </span>
            <Collapse in={openBasicUiElement}>
              <ul>
                <Link to="/buttons" >
                  <li>Buttons</li>
                </Link>
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
            >
              User Pages
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
            >
              Error Pages
            </span>
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

      </nav>
    </Router>
  );
}

export default Navbar;
