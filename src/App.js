import Navbar from './component/layout/navbar';
// import Sidebar from './component/layout/sidebar';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
    <Row>

      <Navbar />
      {/* <Sidebar /> */}
    </Row>
    </Container>
  );
}

export default App;
