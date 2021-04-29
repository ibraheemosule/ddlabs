// import logo from './logo.svg';
import './App.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TheNavigation from "./components/TheNavigation";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={2}>
        <TheNavigation />
        </Col>
        <Col>
        <Row>
          <Col>
        this is another
        <Button variant="info">hey brother</Button>
        </Col>
        <Col>
        this is another
        </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
