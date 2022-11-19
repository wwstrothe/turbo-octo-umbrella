// react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// components
import Fees from './components/Fees';
import Footer from './components/Footer';
import Header from './components/Header';
import Usage from './components/Usage';

function App() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs lg="12">
            <Header />
          </Col>
          <Col xs lg="10">
            <Usage />
          </Col>
          <Col xs lg="8" className="fees">
            <Fees />
          </Col>

          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
