import React from "react";
import { Container, Jumbotron, Row, Table, Button } from "react-bootstrap";

import "./css/checkout.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromCart } from "./actions/cart";
import cookies from "./cookiestore";

class Checkout extends React.Component {
  checkout() {
    if (
      cookies.get("session") === null ||
      cookies.get("session") === undefined ||
      cookies.get("session") === ""
    ) {
      alert("Please login first");
    } else {
      // Show Payment page
    }
  }

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
          {this.props.cart.length > 0 ? (
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
                  {this.props.cart.map(p => (
                    <tr key={p.product.id}>
                      <td>{p.product.id}</td>
                      <td>{p.product.name}</td>
                      <td>{p.quantity}</td>
                      <td>R {p.product.price}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() =>
                            this.props.removeFromCart(p.product.id)
                          }
                        >
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
                {this.props.cart.length > 0
                  ? this.props.cart.reduce(
                      (sum, val) => sum + val.product.price * val.quantity,
                      0
                    )
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
