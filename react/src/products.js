import React from "react";
import {
  Container,
  Row,
  Jumbotron,
  Button,
  Card,
  CardDeck
} from "react-bootstrap/";
import "./css/products.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "./actions/cart";

class Products extends React.Component {
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
          <CardDeck>
            {products ? (
              products.map(item => (
                <Card
                  className="shadow trans"
                  key={item.id}
                  // onClick={() =>
                  //   this.props.history.push(`/products/${item.id}`)
                  // }
                >
                  <img
                    className="card-img-top"
                    src="../static/images/logo.png"
                    alt="logo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{item.name}</strong>
                    </h5>
                    <hr />
                    <p className="card-text">{item.text}</p>
                    {admin ? (
                      // TODO: Make buttons look beautiful
                      <div>
                        <Button>Edit</Button> <Button>Delete</Button>
                        <br />
                        <br />
                      </div>
                    ) : null}
                    <div>
                      <Button onClick={() => this.props.addToCart(item)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <h3>No Products Found</h3>
            )}
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
