import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink, Switch, Redirect, withRouter} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap/';
import { ModalButton, PaymentCard, ItemCard} from './templates';
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

import "./css/App.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search_term: "Bose",
      products: []
    };
  }

  render() {
    const search = () => {
      window.location.assign('/products/' + this.state.search_term);
    }
    return (
      <>
        <div className="App">
          <Layout search={search} />
        </div>
      </>
    );
  }
}

function Layout(props) {
  var isLoggedin = true;
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
                <NavLink className="linkmr-4" to="/customize">
                  <i className="fas fa-wrench"></i>&nbsp; Customize
                </NavLink>
              </Nav>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              <InputGroup size="md" className="searchBar" >
                <InputGroup.Prepend>
                  <FormControl
                    id="name"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value="Search"
                    onChange={handleState}
                    className="searchBar"
                  />
                </InputGroup.Prepend>
              </InputGroup>
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
}

export default App;
