
import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import { Dropdown, Accordion, Card, Button } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const Navbar = ({ reloadPage }) => {
  const [open, setOpen] = useState(false);

  // 이 부분 해결법을 찾아야함
  const [openBasicUiElement, setOpenBasicUiElement] = useState(false);
  const [openFormElement, setOpenFormElement] = useState(false);
  const [openTables, setOpenTables] = useState(false);
  const [openCharts, setOpenCharts] = useState(false);
  const [openUserPage, setOpenUserPage] = useState(false);
  const [openErrorPage, setOpenErrorPage] = useState(false);

  return (
    <nav>
      <ul>
        <Link to="/dashboard">
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
              <Link to="/buttons">
                <li>Buttons</li>
              </Link>
              <Link to="/dropdown">
                <li>Dropdowns</li>
              </Link>
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
              <Link to="/element">
                <li>Basic Elements</li>
              </Link>
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
              <Link to="/tableBasic">
                <li>Basic Tables</li>
              </Link>
            </ul>
          </Collapse>
        </li>
        <Link to="icon">
          <li>Icons</li>
        </Link>
        <li>
          <span
            onClick={() => setOpenCharts(!openCharts)}
            aria-expanded={openCharts}
          >
            Charts
          </span>
          <Collapse in={openCharts}>
            <ul>
              <Link to="chartjs">
                <li>ChartJS</li>
              </Link>
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
              <Link to="login">
                <li>login</li>
              </Link>
              <Link to="join">
                <li>join</li>
              </Link>
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
              <Link to="error400">
                <li>400</li>
              </Link>
              <Link to="error500">
                <li>500</li>
              </Link>
            </ul>
          </Collapse>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
