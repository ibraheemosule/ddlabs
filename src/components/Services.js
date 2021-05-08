import Emoji from "react-emoji-render";
import { Row, Col } from "react-bootstrap";
import "../assets/Services.scss";

const Services = () => {
  return (
    <Row className="emoji-wrapper">
      <Col>
        <div className="content">
          <Emoji text="🔥" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Newest</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="💵" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Promos</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="🥑" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Fruits</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="💊" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Herbs</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="🍹" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Beverages</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="🎻" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Music</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="🍪" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Bakery</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="🎯" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Toys</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="📱" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Electronics</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="🍼" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Baby</p>
      </Col>
      <Col>
        <div className="content">
          <Emoji text="💐" onlyEmojiClassName="emoji" />
        </div>
        <p className="text">Plants</p>
      </Col>
    </Row>
  );
};

export default Services;
