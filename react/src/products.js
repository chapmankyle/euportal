import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import './products.css';

export default class Products extends React.Component {
  
  render() {

    const list = [{ name: 'Product Name', id: 1, text: 'Text' }, 
      { name: 'Product Name 2', id: 2, text: 'Text for Product 2' },
      { name: 'Product Name 3', id: 3, text: 'Text for Product 3' }
    ];
    // Need to check if user is admin -- If admin then show additional options
    const admin = (window.location.pathname === '/products');

    return (
      <div>
        <Jumbotron>
          <Container>
              <Row>
                <h1>Products Page!</h1>
              </Row>
          </Container>
        </Jumbotron>
        <Container>
          <div className="row justify-content-center items">
            {list ? list.map(item => (
              <div className="col-md-4" onClick={() => (this.props.history.push(`/products/${item.id}`))}>
                <div className="card shadow trans">
                  <img className="card-img-top" src="../static/images/logo.png" alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{ item.name }</strong></h5>
                    <p className="card-text">{ item.text }</p>
                    {admin ? (
                      // TODO: Make buttons look beautiful
                      <div>
                        <Button>Edit</Button>
                        <br/>
                        <br/>
                        <Button>Delete</Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )) : <h3>No Products Found</h3> }
          </div>
        </Container>

      </div>  
    )
  }
}
