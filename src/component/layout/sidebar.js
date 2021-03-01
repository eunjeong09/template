import React, { useState, useEffect, useRef } from "react";
import { Overlay, OverlayTrigger, Popover, Container, Row, Col } from "react-bootstrap";
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
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div className="sideBar">
      <ul>
        <li>
          <FaDesktop />
        </li>
        <li>
          <FaClone />

          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref.current}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Content>
                <ul>
                  <Link to="/buttons">
                    <li>Buttons</li>
                  </Link>
                  <Link to="/dropdown">
                    <li>Dropdowns</li>
                  </Link>
                </ul>
              </Popover.Content>
            </Popover>
          </Overlay>
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
      </ul>
    </div>
  );
}

export default Sidebar;
