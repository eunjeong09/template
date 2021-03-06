import Navbar from "./component/layout/navbar";
import Sidebar from "./component/layout/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

// component
import Dashboard from "./component/dashboard";
import Buttons from "./component/buttons";
import Dropdowns from "./component/dropdown";
import Element from "./component/element";
import TableBasic from "./component/tableBasic";
import Icon from "./component/icon";
import Chartjs from "./component/chartjs";
import Login from "./component/login";
import Join from "./component/join";
import Error400 from "./component/error400";
import Error500 from "./component/error500";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          {/* <Navbar /> */}
          <Sidebar />
          <Col>
            <Route exact path="/" component={Dashboard} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/dropdown" component={Dropdowns} />
            <Route path="/element" component={Element} />
            <Route path="/tableBasic" component={TableBasic} />
            <Route path="/icon" component={Icon} />
            <Route path="/chartjs" component={Chartjs} />
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
            <Route path="/error400" component={Error400} />
            <Route path="/error500" component={Error500} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
