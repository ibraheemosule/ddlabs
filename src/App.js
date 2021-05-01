// import logo from './logo.svg';
import './App.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TheNavigation from "./components/TheNavigation";
import Col from "react-bootstrap/Col";
import MainContent from "./components/MainContent";
import TheAside from "./components/TheAside";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={2}>
        <TheNavigation />
        </Col>
        <Col sm={10} className="col-sm-10">
        <Row>
          <Col sm={9}>
            <MainContent />
        </Col>
        <Col sm={3}>
          <TheAside />
        </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
