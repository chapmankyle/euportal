import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, CardDeck, Card } from 'react-bootstrap/';
import prodTemp from './images/dummy_600x.png'

class Landing extends React.Component {
  ItemCard() {
    return (
      <>
        <Card tag="a" style={{ cursor: "pointer" }} onClick={this.showModal}>
          <Card.Img variant="top" src={prodTemp} />
          <Card.Body>
            <Card.Title>Item</Card.Title>
            <Card.Text>
              Short item description.
          </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }

  render() {
    return (
      <>
        <Jumbotron>
          <Container>
            <h1>Shop Banner!</h1>
            <p>
              This is my store, thank you for shopping with us!
            <br />
              You can contact me on: 123-456-7890
          </p>
          </Container>
        </Jumbotron>
        <Container>
          <CardDeck>
            {this.ItemCard()}
            {this.ItemCard()}
            {this.ItemCard()}
          </CardDeck>
          <br />
          <CardDeck>
            {this.ItemCard()}
            {this.ItemCard()}
            {this.ItemCard()}
          </CardDeck>
        </Container>
      </>
    );
  }
}

export default Landing;
