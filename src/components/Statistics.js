import {Row, Col, Button } from "react-bootstrap"
import '../assets/Statistics.scss';

const Statistics = () => {
  return (
    <Row className="statistics-container">
      <Col sm={3} className="items">
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
      <Col sm={8}className="sales">
      <Row className="header">
        <h4>Sales statistics</h4>
        <h4>. .</h4>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
      </Col>
    </Row>
  )
}

export default Statistics;