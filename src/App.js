// components
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from './components/Footer';
import Header from './components/Header';
import Fees from './Pages/Fees';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-content-center ">
          <Col xs lg="9">
            <Fees />
          </Col>
        </Row>
      </Container>

      <br></br>
      <Footer />
    </div>
  );
}

export default App;
