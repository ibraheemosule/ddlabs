import { Row, Col, Table } from "react-bootstrap";
import "../assets/Orders.scss";

const Orders = () => {
  return (
    <Col className="orders">
      <Row className="header">
        <Col md={8} lg={5}>
          <Row>
            <h4>All Products</h4>
            <h4>Ordered</h4>
            <h4>Returned</h4>
          </Row>
        </Col>
        <h4>. .</h4>
      </Row>
      <Row className="table-container">
        <Col>
          <Table responsive="md">
            <thead>
              <tr className="title">
                <th>
                  <label>
                    <input type="checkbox" />
                    <span>Product Name</span>
                  </label>
                </th>
                <th>Variant</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    <span>Sony 1000Xm3</span>
                  </label>
                </td>
                <td>Black</td>
                <td>1,300 Items</td>
                <td>$800</td>
                <td className="fail">
                  <span>CANCELLED</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    <span>Iphone 11 Pro</span>
                  </label>
                </td>
                <td>Grey</td>
                <td>2,484 Items</td>
                <td>$1200</td>
                <td className="pass">
                  <span>COMPLETED</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    <span>Redmi Note 9 Pro</span>
                  </label>
                </td>
                <td>Blue</td>
                <td>1,240 Items</td>
                <td>$300</td>
                <td className="fail">
                  <span>CANCELLED</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" />
                    <span>Sony</span>
                  </label>
                </td>
                <td>White</td>
                <td>2,340 Items</td>
                <td>$100</td>
                <td className="pass">
                  <span>COMPLETED</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
};

export default Orders;
