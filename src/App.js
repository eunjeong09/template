import Navbar from "./component/layout/navbar";
// import Sidebar from './component/layout/sidebar';
import { Container, Row } from "react-bootstrap";
import React, { useState, useCallback } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

// component
import Dashboard from "./component/dashboard";
//button
import Buttons from "./component/buttons";

import { atom, useRecoilState } from "recoil";


function App() {

  return (
    <Router>
      <Container>
        <Row>
          <Navbar/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/buttons" component={Buttons} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
