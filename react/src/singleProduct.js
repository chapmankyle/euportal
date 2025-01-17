import React from "react";
import {
  Container,
  Row,
  Jumbotron,
  Col,
  Image,
  Card,
  Modal,
  Button,
  Alert,
  Spinner
} from "react-bootstrap/";

import image1 from "./images/products/product-1.jpg";
import image2 from "./images/products/product-2.jpg";
import image3 from "./images/products/product-3.jpg";
import image4 from "./images/products/product-4.jpg";
import "./css/products.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "./actions/cart";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      show: false,
      product: {
        name: null,
        id: null,
        text: null,
        description: null
      },
      add: "none",
      loading: true
    };
  }

  componentWillMount() {
    fetch(`/api/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          product: {
            id: res[0],
            name: res[1],
            description: res[2],
            price: res[3],
            text: res[2]
          }
        });
      })
      .catch(e => {
        alert("an error occured");
        this.props.histry.push("/products");
      });
  }

  render() {
    const product = this.state.product;

    const handleShow = image => setShow(image, true);
    const handleClose = () => setShow(null, false);

    const add = e => {
      this.props.addToCart(product.id, product.name, product.price);
      let target = e.target;
      target.className = target.className.replace("btn-primary", "btn-success");
      this.setState({
        add: "block"
      });
      setTimeout(() => {
        this.setState({
          add: "none"
        });
        target.className = target.className.replace(
          "btn-success",
          "btn-primary"
        );
      }, 3000);
    };

    const setShow = (image, bool) => {
      this.setState({
        show: bool,
        image
      });
    };

    return (
      <>
        {" "}
        {this.state.loading ? (
          <Row className="h-100 w-100">
            <Col
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                transform: "translate(50%)"
              }}
            >
              <Spinner animation="grow" /> Loading...
            </Col>
          </Row>
        ) : (
          <div>
            <Jumbotron>
              <Container>
                <Row>
                  <h1 style={{ textAlign: "center" }}>{product.name}</h1>
                </Row>
              </Container>
            </Jumbotron>
            <Container>
              <Row>
                <Col lg={5}>
                  <br />
                  <h2>Description</h2>
                  <p>{product.description}</p>R {product.price}
                  <br />
                  <br />
                  <Button onClick={add}>Add To Cart</Button>
                  <br />
                  <br />
                  <Alert style={{ display: this.state.add }} variant="success">
                    Item Added to Cart
                  </Alert>
                </Col>
              </Row>

              <Modal show={this.state.show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Image
                    src={this.state.image}
                    className="mx-auto d-block"
                    fluid
                  />
                  >
                </Modal.Body>
              </Modal>
            </Container>
          </div>
        )}
      </>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}
export default connect(
  null,
  matchDispatchToProps
)(SingleProduct);
