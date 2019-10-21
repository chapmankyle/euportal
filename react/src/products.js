import React, { Component } from 'react';
import { Container, Jumbotron, Button, CardDeck, Col, Row } from 'react-bootstrap/';
import './css/products.css';
import { ItemCard, ModalButton } from './templates'
import AddProduct from './addProduct';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  UNSAFE_componentWillMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(res => {
        this.setState({
          products: res
        });
      });
  }

  render() {
    const products = this.state.products;
    // Need to check if user is admin -- If admin then show additional options
    const admin = window.location.pathname !== "/products";

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
            <ModalButton buttonName="Add Product" title="Add Product" 
              body={<AddProduct firstname={this.state.firstname} 
              surname={this.state.surname} password={this.state.password} 
              email={this.state.email} session={this.state.session}/>} 
            />
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            {products.length > 0 ? products.map(item => (
              <Col md={4} lg={4}>
                <ItemCard id={item[0]} name={item[1]} text={item[2]} price={item[3]}
                  admin={false} push={this.props.history.push} 
                />
              <br />
              </Col>
              )) : (<h3>No Products Found</h3>)
            }
          </Row>
        </Container>
      </div>
    );
  }
}
