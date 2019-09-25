import React from 'react';
import { Container, Row, Jumbotron, Button } from 'react-bootstrap/';
import './css/products.css';
import {ItemCard} from './templates'

export default class Products extends React.Component {

  render() {

    const list = [
      {
        name: 'Bose QuietComfort Headphones',
        id: 1,
        text: 'An amazing pair of wireless bluetooth headphones from the Bose QuietComfort 35 range!',
        img: './images/products/product-1.jpg'
      },
      {
        name: 'Product Name 2',
        id: 2,
        text: 'Text for Product 2',
        img: '../static/images/logo.png'
      },
      {
        name: 'Product Name 3',
        id: 3,
        text: 'Text for Product 3',
        img: '../static/images/logo.png'
      }
    ];

    // Need to check if user is admin -- If admin then show additional options
    const admin = (window.location.pathname === '/products');

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
            {list ? list.map(item => (
              <ItemCard id={item.id} name={item.name} text={item.text} admin={admin} push={this.props.history.push} />
            )) : <h3>No Products Found</h3>}
          </div>
        </Container>

      </div>
    )
  }
}
