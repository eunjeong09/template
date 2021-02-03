import Navbar from './component/layout/navbar';
// import Sidebar from './component/layout/sidebar';
import { Container, Row } from 'react-bootstrap';
import React, { useState } from "react";


// component
import Dashboard from "./component/dashboard.js"
//button
import Buttons from "./component/buttons.js"



function App() {
  //일단 테스트를 위해서 오른쪽에 buttons이 보이도록
  const [comp, setComp] = useState(Dashboard);

  return (
    <Container>
    <Row>

      <Navbar />
      {/* <Sidebar /> */}
      <Dashboard />

    </Row>
    </Container>
  );
}

export default App;
