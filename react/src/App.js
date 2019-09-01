
import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./landing";
import Profile from "./profile";
import Products from "./products";
import SingleProduct from "./singleProduct";
import Customize from "./customize";
import Login from "./login";
import Register from "./register";
import Error from "./error";
import "./App.css"

class App extends React.Component{
  render() {
    return (
      <div className='App'>
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
        <Navbar.Brand> My Company </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto" pullRight>
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/profile">Profile</NavLink>
            <NavLink className="link" to="/customize">Customize</NavLink>
            <NavLink className="link" to="/products">Products</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Landing} />
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
