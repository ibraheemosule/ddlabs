import { Col, Row, Container } from "react-bootstrap";
import Emoji from "react-emoji-render";
import "../assets/TheAside.scss";
import {images} from "../assets/images/images";

const TheAside = () => {
  return (
    <Container className="the-aside">
      <Col className="items">
      <Row className="header">
        <h4>Overview</h4>
        <h4>. .</h4>
      </Row>
      <Row className="total-orders">
        <Row className="order-container">
        <Col md={6}>
          <p>Total orders</p>
          <h4>$342.70 <small><sup>+8</sup></small></h4>
        </Col>
        <Col md={6}><img src={ images.blue } alt="blue graph" /></Col>
        </Row>
        <Row className="total-items">
        <Col md={6}>
          <p>17 Total items</p>
        </Col>
        <Col md={6}><span>View details</span></Col>
        </Row>
      </Row>
      </Col>

      <Col className="items total-returns">
      <Row className="total-orders">
        <Row>
        <Col md={6}>
          <p>Total orders</p>
          <h4>$342.70 <small><sup>+8</sup></small></h4>
        </Col>
        <Col md={6}><img src={ images.red } alt="blue graph" /></Col>
        </Row>
        <Row className="total-items">
        <Col md={6}>
          <p>17 Total items</p>
        </Col>
        <Col md={6}><span>View details</span></Col>
        </Row>
      </Row>
      </Col>

      <Col className="activities">
      <Row className="header">
        <h4>Latest Activities</h4>
        <h4>. .</h4>
      </Row>
      <Col className="items total-returns">
      <Row className="total-orders">
        <Row>
          <Col md={2}>
          <div className="content">
            <Emoji text="🎧"  onlyEmojiClassName="emoji"/>
          </div>
          </Col>
         <Col md={7}>
          <p>Sony 1000Xm3</p>
          <p className="date">Sept 12, 2021</p>
          </Col>
         <Col md={3}><span>- $160</span></Col>
        </Row>
        <Row className="total-items">
        <Row>
          <Col md={2}>
          <div className="content">
            <Emoji text="📱"  onlyEmojiClassName="emoji"/>
          </div>
          </Col>
         <Col md={7}>
          <p>Sony 1000Xm3</p>
          <p className="date">Sept 12, 2021</p>
          </Col>
         <Col md={3}><span className="price">- $160</span></Col>
        </Row>
        </Row>
      </Row>
      </Col>
      </Col>

      <Col className="activities">
      <Row className="header">
        <h4>Sales Lists</h4>
        <h4>. .</h4>
      </Row>

      <Col className="items total-returns profile">
      <Row className="total-orders">
        <Row>
          <Col md={2}>
          <div className="content">
            <Emoji text="👨🏾"  onlyEmojiClassName="emoji"/>
          </div>
          </Col>
         <Col md={10}>
          <p>Supardi Hokya</p>
          <p className="date">ID: 567936354739</p>
          </Col>
        </Row>
      </Row>
      </Col>

      <Col className="items total-returns profile">
      <Row className="total-orders">
        <Row>
          <Col md={2}>
          <div className="content">
            <Emoji text="👨🏼"  onlyEmojiClassName="emoji"/>
          </div>
          </Col>
         <Col md={10}>
          <p>Kidi Etan</p>
          <p className="date">ID: 567936564740</p>
          </Col>
        </Row>
      </Row>
      </Col>


      <Col className="items total-returns profile">
      <Row className="total-orders">
        <Row>
          <Col md={2}>
          <div className="content">
            <Emoji text="👱🏽"  onlyEmojiClassName="emoji"/>
          </div>
          </Col>
         <Col md={10}>
          <p>Parjo Klaten</p>
          <p className="date">ID: 567936354740</p>
          </Col>
        </Row>
      </Row>
      </Col>

      </Col>
    </Container>
  )
}

export default TheAside;