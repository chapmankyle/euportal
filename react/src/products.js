import React, { Component } from 'react';
import { Container, Row, Jumbotron, Button } from 'react-bootstrap/';
import './css/products.css';
import { ItemCard } from './templates'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "./actions/cart";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res.products
        });
      });
  }

  render() {
    const products = this.state.products;
    // Need to check if user is admin -- If admin then show additional options
    const admin = window.location.pathname === "/products";

    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <h1>Products Page</h1>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <div className="row justify-content-center items">
            {products.length > 0 ? products.map(item => (
              <ItemCard id={item.id} name={item.name} text={item.text} admin={admin} addToCart={this.props.addToCart} item={item} />
            )) : <h3>No Products Found</h3>}
          </div>
        </Container>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}
export default connect(
  null,
  matchDispatchToProps
)(Products);
