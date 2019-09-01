
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Landing from "./landing";
import Profile from "./profile";
import Login from "./login";
import Register from "./register";
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
            <NavLink class="link" to="/">Home</NavLink>
            <NavLink class="link" to="/profile">Profile</NavLink>
            <NavLink class="link" to="/login">Login</NavLink>
            <NavLink class="link" to="/register">Register</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Route exact path="/" component={Landing} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
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
