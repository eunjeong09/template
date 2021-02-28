import React, { useState, useEffect } from "react";
import { OverlayTrigger, Popover, Container, Row, Col } from "react-bootstrap";
import { Link, Route } from "react-router-dom";

//react-icons
import {
  FaDesktop,
  FaClone,
  FaRegChartBar,
  FaListUl,
  FaTable,
  FaSplotch,
  FaUserTag,
  FaDizzy,
} from "react-icons/fa";


function Sidebar() {
  return (
    <div className="sideBar">
      Sidebar~~
      <ul>
        <li>
          <FaDesktop />
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={
              <ul>
                <Link to="/buttons">
                  <li>Buttons</li>
                </Link>
                <Link to="/dropdown">
                  <li>Dropdowns</li>
                </Link>
              </ul>
            }
          >
            <FaClone />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={
              <ul>
                <Link to="/element">
                  <li>Basic Elements</li>
                </Link>
              </ul>
            }
          >
            <FaListUl />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={
              <ul>
                <Link to="/tableBasic">
                  <li>Basic Tables</li>
                </Link>
              </ul>
            }
          >
            <FaTable />
          </OverlayTrigger>
        </li>
        <li>
          <FaSplotch />
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={
              <ul>
                <Link to="/chartjs">
                  <li>ChartJS</li>
                </Link>
              </ul>
            }
          >
            <FaRegChartBar />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={
              <ul>
                <Link to="login">
                  <li>login</li>
                </Link>
                <Link to="join">
                  <li>join</li>
                </Link>
              </ul>
            }
          >
            <FaUserTag />
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            placement="right"
            overlay={
              <ul>
                <Link to="error400">
                  <li>400</li>
                </Link>
                <Link to="error500">
                  <li>500</li>
                </Link>
              </ul>
            }
          >
            <FaDizzy />
          </OverlayTrigger>
        </li>
        {/* <li>
          <OverlayTrigger placement="right" overlay={popover}>
            <FaDizzy />
          </OverlayTrigger>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
