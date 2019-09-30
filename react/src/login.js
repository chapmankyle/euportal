import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './css/App.css';
import "./css/login.css";
import cookies from "./cookiestore";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      session: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(`/api/login/${this.state.email};${this.state.password}`)
    .then(response => response.text())
    .then((text) => {
      if (text === ""){
        alert("Email/Password incorrect, please try again");
      } else {
        this.state.session = text;
        cookies.set("session", text);
      }
    })
    .then(() => { 
      fetch(`/api/check_if_admin/${this.state.session}`)
      .then(response => response.text())
      .then(text => {
        if (text === ""){
          cookies.set("user_type", "normal");
        } else {
          cookies.set("user_type", text);
        }
        this.props.history.push('/profile');
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
          <hr />
          <span>
            Don't have an account? &nbsp;
            <a href="/register">Create an Account</a>
          </span>
        </form>
      </div>
    );
  }
}
