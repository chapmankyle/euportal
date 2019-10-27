import React, { Component } from 'react';
import { Container, Jumbotron, Button, CardDeck, Col, Row} from 'react-bootstrap/';
import './css/products.css';
import { ItemCard, ModalButton } from './templates'
import AddProduct from './addProduct';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "",
      products: []

    };
  }

  componentWillMount() {
    // UNSAFE_Currently
    // TODO: add to store instead
    let search_term = this.props.match.params.search;

    try {
      fetch("/api/pageinfo")
      .then(res => res.json())
              .then(res => {
                this.setState({
                  about: res
                });
              });
    }
    catch (e) {
      alert(e.message);
    }

    if (search_term) {
      try {
        fetch("/api/search/" + search_term)
          .then(response => response.json())
          .then(data => {
            this.setState({
              products: data
            })
          });
      } catch (e) {
        alert(e.message);
      }
    } else {
      fetch("/api/products")
        .then(res => res.json())
        .then(res => {
          this.setState({
            products: res
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
      console.log("Searching " + this.state.search_term + "!!")
      try {
        fetch("/api/search/" + this.state.search_term)
          .then(response => response.json())
          .then(data => {
            this.setState({
              products: data
            })
          });
      } catch (e) {
        alert(e.message);
      }
    }


    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Welcome</h1>
            <p>
              {about}
            </p>
            {admin ? (
              <ModalButton buttonName="Add Product" title="Add Product" body={<AddProduct firstname={this.state.firstname} surname={this.state.surname} password={this.state.password} email={this.state.email} session={this.state.session} />} />
            ) : null}

          </Container>
        </Jumbotron>
        <Container>
          <Row>
            {products.length > 0 ? products.map(item => (
              <Col className="mb-5" lg="4" md="4" sm="12">
              <ItemCard id={item[0]} name={item[1]} text={item[2]} price={item[3]}
                admin={admin} push={this.props.history.push}
              />
              </Col>
            )) : <h3>No Products Found</h3>}
          </Row>
        </Container>
      </div>
    );
  }
}