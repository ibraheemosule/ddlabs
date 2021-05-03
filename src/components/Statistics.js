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
        <Col md={6}className="stats first">
        <div class="percent">
          <div class="per ce"> +64%</div>
          <div class="per de">+40%</div>
          <div class="per ee">-32%</div>
          <div class="per fe">-24%</div>
        </div>
        <div className="week"> Week 1</div>
        <div class="line">
          <div class="blue seven"></div> 
          <div class="blue eight"></div> 
          <div class="blue eleven"></div> 
          <div class="blue nine"></div> 
          <div class="blue ten"></div> 
          <div class="blue eight"></div> 
          <div class="blue nine"></div> 
          <div class="blue eleven"></div> 
          <div class="blue eight"></div> 
          <div class="blue eight"></div> 
          <div class="blue seven"></div> 
          <div class="blue nine"></div> 
          <div class="blue eleven"></div> 
          <div class="blue ten"></div> 
          <div class="blue nine"></div> 
          <div class="blue eight"></div> 
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
        <Col md={6}className="stats">
        <div class="percent">
          <div class="per ce"> +32%</div>
          <div class="per de">-24%</div>
          <div class="per ee">-32%</div>
          <div class="per fe">-40%</div>
        </div>
        <div className="week"> Week 2</div>
        <div class="line">
          <div class="blue seven"></div> 
          <div class="blue eight"></div> 
          <div class="blue eleven"></div> 
          <div class="blue nine"></div> 
          <div class="blue ten"></div> 
          <div class="blue eight"></div> 
          <div class="blue nine"></div> 
          <div class="blue eleven"></div> 
          <div class="blue eight"></div> 
          <div class="blue eight"></div> 
          <div class="blue seven"></div> 
          <div class="blue nine"></div> 
          <div class="blue eleven"></div> 
          <div class="blue ten"></div> 
          <div class="blue nine"></div> 
          <div class="blue eight"></div> 
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
  )
}

export default Statistics;