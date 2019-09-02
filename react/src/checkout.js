import React from 'react';
import { Container, Jumbotron, Row, Table, Button } from 'react-bootstrap';

import './css/checkout.css'

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <h1>Shopping Cart</h1>
            </Row>
          </Container>
        </Jumbotron>
        <div className="container">
          <Table responsive>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bose QuietComfort 35 II Wireless Bluetooth Headphones</td>
                <td>1</td>
                <td>$ 349,95</td>
                <td><Button variant="danger">Delete</Button></td>
              </tr>
            </tbody>
          </Table>
          <br />
          <span className="total-cost">Total Cost: </span>
          <span>$ 349,95</span>
        </div>
      </div>
    );
  }
}
