import React from "react";
import { Container, Jumbotron, Row, Table, Button } from "react-bootstrap";

import "./css/checkout.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromCart } from "./actions/cart";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart
    };
  }
  checkout() {
    console.log("out");
  }
  render() {
    const removeItem = i => {
      this.setState(state => {
        // eslint-disable-next-line no-unused-labels
        cart: state.cart.filter((item, index) => index === i);
      });
      console.log(this.state);
      this.props.removeFromCart(i);
    };
    console.log(this.state);
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
          {this.state.cart.length > 0 ? (
            <div>
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
                  {this.state.cart.map((product, i) => (
                    <tr key={i}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>1</td>
                      <td>R {product.price}</td>
                      <td>
                        <Button variant="danger" onClick={i => removeItem(i)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <br />
              <span className="total-cost">Total Cost: </span>
              <span>
                R{" "}
                {this.state.cart.length > 0
                  ? this.state.cart.reduce((sum, val) => sum + val.price, 0)
                  : "0"}
              </span>
              <br />
              <br />
              <Button variant="primary" onClick={this.checkout}>
                Buy
              </Button>
            </div>
          ) : (
            <h2>No items in cart</h2>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromCart }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Checkout);
