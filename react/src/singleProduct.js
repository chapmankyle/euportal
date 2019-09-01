import React from 'react';
import { Container, Row, Jumbotron } from 'react-bootstrap/';
import './products.css';

export default class SingleProduct extends React.Component {
  render() {
    const { id } = this.props.match.params;
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
          <h1 className="pg-title">Products Page for id: {id}</h1>
        </Container>
      </div>  
    )
  }
}
