// import logo from './logo.svg';
import './App.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TheNavigation from "./components/TheNavigation";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import MainContent from "./components/MainContent"

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={2}>
        <TheNavigation />
        </Col>
        <Col sm={10} className="col-sm-10">
        <Row>
          <Col xs={9}>
            <MainContent />
        </Col>
        <Col>

        </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
