import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink, Switch, Redirect, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, InputGroup, FormGroup, FormLabel } from 'react-bootstrap/';
import { ModalButton, PaymentCard, ItemCard } from './templates';
import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './images/react.png';
import Customize from "./customize";
import Checkout from "./checkout";
import Error from "./error";
import Landing from "./landing";
import Login from "./login";
import Products from "./products";
import Profile from "./profile";
import Register from "./register";
import SingleProduct from "./singleProduct";
import cookies from "./cookiestore";

import "./css/App.css";

import { connect } from 'react-redux';
import { getTheme } from './actions/theme';
import { bindActionCreators } from "redux";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search_term: "",
      products: [],
      session: ""
    };
  }

  render() {
    const search = () => {
      window.location.assign('/products/' + this.state.search_term);
    }
    return (
      <>
        <div className="App">
          <Layout getTheme={this.props.getTheme} search={search} />
        </div>
      </>
    );
  }
}

function Layout(props) {
  let isLoggedin = true;
  if (cookies.get("session") === null || cookies.get("session") === undefined || cookies.get("session") === "") {
    isLoggedin = false;
  }

  const handleState = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  return (
    <Router>
      <div className="page-container">
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Navbar.Brand href="/">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
              {' Company Name '}
            </Navbar.Brand>
            <Navbar.Collapse>
              {isLoggedin ? (
                <Nav className="mr-auto push-right">
                  <NavLink className="link mr-4" to="/profile">
                    <i className="fas fa-user-circle"></i>&nbsp; Profile
                  </NavLink>
                  <NavLink className="link mr-4" to="/logout">
                    <i className="fas fa-user-circle"></i>&nbsp; Logout
                  </NavLink>
                </Nav>
              ) : (
                  <Nav className="mr-auto push-right">
                    <NavLink className="linkmr-4" to="/login">
                      <i className="fas fa-user-circle"></i>&nbsp; Login
                  </NavLink>
                  </Nav>
                )}
              <Nav className="mr-auto push-right">
                <NavLink className="linkmr-4" to="/products">
                  <i className="fas fa-box-open"></i>&nbsp; Products
                </NavLink>
              </Nav>
              <FormGroup controlId="price" bsSize="large">
                <FormControl
                  id="0"
                  value="Search"
                  onChange={handleState}
                />
              </FormGroup>
              <Button variant="outline-info" onClick={props.search}>Search</Button>
              <Nav className="push-right">
                <NavLink className="link ml-4" to="/checkout">
                  <i className="fas fa-shopping-cart"></i>&nbsp; Cart
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <div className="push-footer">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/landing" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/customize" component={Customize} />
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:search" component={Products} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/*" component={Error} />
          </Switch>
        </div>

        <Foot />
      </div>
    </Router>
  );
}

function Foot() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container center-text eu-footer">
        Copyright 2019 EPI-USE Systems Limited | a member of
        <a href="https://groupelephant.com">groupelephant.com</a> | <a
          href="https://epiuse.com/privacy-policy/" target="_blank"
          rel="noopener noreferrer">Privacy Policy</a>&nbsp;| <a
            href="https://epiuse.com/cookie-policy/" target="_blank"
            rel="noopener noreferrer">Cookie Policy</a> | <a
              href="https://epiuse.com/disclaimer/" target="_blank"
              rel="noopener noreferrer">Disclaimer</a>
      </div>
    </footer>
  );
}

function Logout() {
  cookies.set("session", "", { path: "/" });
  window.location = '/login';
}


function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getTheme }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App);
