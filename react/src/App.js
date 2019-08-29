
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import Landing from "./landing";
import Profile from "./profile";
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
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Route exact path="/" component={Landing} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

function Header() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </div>
  );
}

export default App;