import React from "react";

import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
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
import { withCookies } from 'react-cookie';

import "./css/App.css"

class App extends React.Component{
  render() {
    return (
      <>
      <div className="App">
        <Layout />
      </div>
      </>
    );
  }
}

function Layout() {
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
              <Nav className="mr-auto push-right">
                <NavLink className="link mr-4" to="/profile">
                  <i className="fas fa-user-circle"></i>&nbsp; Profile
                </NavLink>
              </Nav>
              <Nav className="mr-auto push-right">
                <NavLink className="link mr-4" to="/products">
                  <i className="fas fa-box-open"></i>&nbsp; Products
                </NavLink>
                <NavLink className="link mr-4" to="/customize">
                  <i className="fas fa-wrench"></i>&nbsp; Customize
                </NavLink>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
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
            <Route path="/landing" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/customize" component={Customize} />
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/products" component={Products} />
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
        rel="noopener">Privacy Policy</a>&nbsp;| <a
        href="https://epiuse.com/cookie-policy/" target="_blank"
        rel="noopener">Cookie Policy</a> | <a
        href="https://epiuse.com/disclaimer/" target="_blank"
        rel="noopener">Disclaimer</a>
      </div>
    </footer>
  );
}

export default withCookies(App);
