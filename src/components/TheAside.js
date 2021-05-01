import { Col, Row, Button, Container } from "react-bootstrap";
import "../assets/TheAside.scss";

const TheAside = () => {
  return (
    <Container>
    <Row>
      <Col className="items">
      <Row className="header">
        <h4>Profitable items</h4>
        <h4>. .</h4>
      </Row>
      <Row className="lists">
        <ol>
          <li>Bakery <span>+ $12</span></li>
          <li>Electronics <span className="negative">- $12</span></li>
          <li>Plants <span>+ $12</span></li>
        </ol>
        <Button>See all activities</Button>
      </Row>
      </Col>
    </Row>
    </Container>
  )
}

export default TheAside;