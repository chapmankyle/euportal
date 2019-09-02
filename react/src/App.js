import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';

import logo from './images/react.png'
import Customize from "./customize";
import Landing from "./landing";
import Login from "./login";
import Products from "./products";
import Profile from "./profile";
import Register from "./register";
import Error from "./error";
import SingleProduct from "./singleProduct";

import "./css/App.css"

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
      </div>
    );
  }
}

function NavBar() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
            {' Company Name '}
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <NavLink className="link mr-4" to="/profile">Profile</NavLink>
            </Nav>
            <Nav className="mr-auto">
              <NavLink className="link mr-4" to="/products">Products</NavLink>
              <NavLink className="link mr-4" to="/customize">Customize</NavLink>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Nav className="mr-auto">
              <NavLink className="link ml-4" to="/checkout">Cart</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/landing" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/customize" component={Customize} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/*" component={Error} />
      </Switch>
    </Router>
  );
}

function Header() {
  return (
    <div>
    </div>
  );
}

export default App;
