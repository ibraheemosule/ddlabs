import "../assets/MainContent.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Search } from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Services from "./Services";
import Statistics from "./Statistics";
import Orders from "./Orders";

const MainContent = () => {
  return (
    <Container className="main">
      <Row className="search-field">
        <Col sm={9}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col sm={3}>
          <Row>
            <Button variant="primary" size="lg">
              Add new item
            </Button>
          </Row>
        </Col>
      </Row>
      <Row className="categories">
        <h4>Categories</h4>
        <h4>. .</h4>
      </Row>
      <Services />
      <Statistics />
      <Orders />
    </Container>
  );
};

export default MainContent;
