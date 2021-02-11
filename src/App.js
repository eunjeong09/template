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

const loadPage = atom({
  key: "loadPage",
  default: "Dashboard",
});



function App() {
  //일단 테스트를 위해서 오른쪽에 buttons이 보이도록
  // const [comp, setComp] = useState(Dashboard);
  const [page, setPage] = useRecoilState(loadPage);
  
  console.log("page : "+page);
  
  const reloadPage = useCallback(() => {
    // reloadPage(true);
    console.log("reloadPage");
    
  });

  return (
    <Router>
      <Container>
        <Row>
          <Navbar reloadPage={reloadPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/buttons" component={Buttons} />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
