import {Row, Col} from "react-bootstrap"
import '../assets/Statistics.scss';
const Statistics = () => {
  return (
    <Row className="statistics-container">
      <Col xs={3} className="items">
      <Row className="header">
        <h4>Categories</h4>
        <h4>. .</h4>
      </Row>
      </Col>
      <Col xs={8}className="sales">
      </Col>
    </Row>
  )
}

export default Statistics;