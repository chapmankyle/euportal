import React, { Component } from 'react';
import { Container, Row, Jumbotron, Button, CardDeck } from 'react-bootstrap/';
import './css/products.css';
import { ItemCard, ModalButton } from './templates'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "./actions/cart";
import AddProduct from './addProduct';

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
                    <h1>Shop Banner!</h1>
                    <p>
                      This is my store, thank you for shopping with us!
                    <br />
                      You can contact me on: 123-456-7890
                  </p>
                  <ModalButton buttonName="Add Product" title="Add Product" body={<AddProduct firstname={this.state.firstname} surname={this.state.surname} password={this.state.password} email={this.state.email} session={this.state.session}/>} />
                  </Container>
        </Jumbotron>
        <Container>
          <CardDeck>
            {products.length > 0 ? products.map(item => (
              <ItemCard id={item.id} name={item.name} text={item.text} admin={admin} addToCart={this.props.addToCart} />
            )) : <h3>No Products Found</h3>}
          </CardDeck>
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
