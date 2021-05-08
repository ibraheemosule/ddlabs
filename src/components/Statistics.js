import { Row, Col, Button } from "react-bootstrap";
import "../assets/Statistics.scss";

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
            <li>
              Bakery <span>+ $12</span>
            </li>
            <li>
              Electronics <span className="negative">- $12</span>
            </li>
            <li>
              Plants <span>+ $12</span>
            </li>
          </ol>
          <Button>See all activities</Button>
        </Row>
      </Col>
      <Col sm={8} className="sales">
        <Row className="header">
          <h4>Sales statistics</h4>
          <h4>. .</h4>
        </Row>
        <Row>
          <Col md={6} className="stats first">
            <div className="percent">
              <div className="per ce"> +64%</div>
              <div className="per de">+40%</div>
              <div className="per ee">-32%</div>
              <div className="per fe">-24%</div>
            </div>
            <div className="week"> Week 1</div>
            <div className="line">
              <div className="blue seven"></div>
              <div className="blue eight"></div>
              <div className="blue eleven"></div>
              <div className="blue nine"></div>
              <div className="blue ten"></div>
              <div className="blue eight"></div>
              <div className="blue nine"></div>
              <div className="blue eleven"></div>
              <div className="blue eight"></div>
              <div className="blue eight"></div>
              <div className="blue seven"></div>
              <div className="blue nine"></div>
              <div className="blue eleven"></div>
              <div className="blue ten"></div>
              <div className="blue nine"></div>
              <div className="blue eight"></div>
            </div>
            <div className="numbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
          </Col>
          <Col md={6} className="stats">
            <div className="percent">
              <div className="per ce"> +32%</div>
              <div className="per de">-24%</div>
              <div className="per ee">-32%</div>
              <div className="per fe">-40%</div>
            </div>
            <div className="week"> Week 2</div>
            <div className="line">
              <div className="blue seven"></div>
              <div className="blue eight"></div>
              <div className="blue eleven"></div>
              <div className="blue nine"></div>
              <div className="blue ten"></div>
              <div className="blue eight"></div>
              <div className="blue nine"></div>
              <div className="blue eleven"></div>
              <div className="blue eight"></div>
              <div className="blue eight"></div>
              <div className="blue seven"></div>
              <div className="blue nine"></div>
              <div className="blue eleven"></div>
              <div className="blue ten"></div>
              <div className="blue nine"></div>
              <div className="blue eight"></div>
            </div>
            <div className="numbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Statistics;
