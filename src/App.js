// components
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fees from './components/Fees';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs lg="12">
            <Header />
          </Col>
          <Col xs lg="8">
            <Fees />
          </Col>
          <Col xs lg="12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
