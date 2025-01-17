import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  Button,
  CardDeck,
  Col,
  Row,
  Spinner
} from "react-bootstrap/";
import "./css/products.css";
import { ItemCard, ModalButton } from "./templates";
import AddProduct from "./addProduct";
import cookies from "./cookiestore";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "",
      products: [],
      loading: true,
      searchTerm: ""
    };
  }

  componentWillMount() {
    if (this.props.location.search) {
      try {
        fetch("/api/search/" + this.props.location.search.substring(2))
          .then(response => response.json())
          .then(data => {
            this.setState({
              products: data,
              loading: false
            });
          });
      } catch (e) {
        alert(e.message);
        this.setState({
          loading: false
        });
      }
    } else {
      fetch("/api/products")
        .then(res => res.json())
        .then(res => {
          this.setState({
            products: res
          });
          this.setState({
            loading: false
          });
        });
    }
  }

  render() {
    const about = this.state.about;
    const products = this.state.products;

    // Need to check if user is admin -- If admin then show additional options
    const admin = window.location.pathname !== "/products";

    const search = () => {
      // searchTerm
      console.log("Searching " + this.state.search_term + "!!");
      try {
        fetch("/api/search/" + this.state.search_term)
          .then(response => response.json())
          .then(data => {
            this.setState({
              products: data,
              loading: false
            });
          });
      } catch (e) {
        alert(e.message);
        this.setState({
          loading: false
        });
      }
    };

    return (
      <>
        {this.state.loading ? (
          <Row className="h-100">
            <Col
              style={{
                transform: "translate(50%, 0)",
                margin: "auto"
              }}
            >
              <Spinner animation="grow" /> Loading...
            </Col>
          </Row>
        ) : (
          <div>
            <Jumbotron>
              <Container>
                <h1>Welcome!</h1>
                <p>
                  {this.state.about}
                </p>
                {!cookies.get("session") === null ||
                cookies.get("session") === undefined ||
                (cookies.get("session") === "" &&
                  cookies.get("user_type")) ? null : (
                  <ModalButton
                    buttonName="Add Product"
                    title="Add Product"
                    body={
                      <AddProduct
                        firstname={this.state.firstname}
                        surname={this.state.surname}
                        password={this.state.password}
                        email={this.state.email}
                        session={this.state.session}
                      />
                    }
                  />
                )}
              </Container>
            </Jumbotron>
            <Container>
              <Row>
                {products.length > 0 ? (
                  products.map(item => (
                    <Col className="mb-5" lg="4" md="4" sm="12">
                      <ItemCard
                        id={item[0]}
                        name={item[1]}
                        text={item[2]}
                        price={item[3]}
                        admin={admin}
                        push={this.props.history.push}
                      />
                    </Col>
                  ))
                ) : (
                  <h3>No Products Found</h3>
                )}
              </Row>
            </Container>
          </div>
        )}
      </>
    );
  }
}
