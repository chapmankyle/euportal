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
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data === "") {
          alert("Email/Password incorrect, please try again");
        } else {
          this.setState({ session: data });
          cookies.set("session", data);
        }
      })
      .then(() => {
        fetch(`/api/check_if_admin/${this.state.session}`)
          .then(response => {
            console.log(response)
            response.json()
          })
          .then(data => {
            console.log(data);
            if (data === "") {
              cookies.set("user_type", "normal");
              cookies.set("session", this.state.session)
            } else {
              cookies.set("user_type", data);
              cookies.set("session", this.state.session)
            }

            let currentSession = cookies.get('user_type');
            if (!(this.state.session == currentSession)) {
              this.setState({
                session: currentSession
              });
              this.props.history.push('/profile');
            }
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  UNSAFE_componentWillMount() {
    if (!(cookies.get("session") === null || cookies.get("session") === undefined || cookies.get("session") === "")) {
      this.props.history.push('/profile/');
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
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
