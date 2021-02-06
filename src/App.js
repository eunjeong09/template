import Navbar from "./component/layout/navbar";
// import Sidebar from './component/layout/sidebar';
import { Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

// component
import Dashboard from "./component/dashboard";
//button
import Buttons from "./component/buttons";

function App() {
  //일단 테스트를 위해서 오른쪽에 buttons이 보이도록
  const [comp, setComp] = useState(Dashboard);

  console.log('app.js return')
  return (
    <Router>
      <Container>
        <Row>
          <Navbar />
          {/* <Sidebar /> */}
          {/* <Dashboard /> */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/buttons" component={Buttons} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
