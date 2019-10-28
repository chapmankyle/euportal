import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Spinner
} from "react-bootstrap";
import "./css/App.css";
import "./css/login.css";
import cookies from "./cookiestore";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      session: "",
      loading: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    fetch(`/api/login/${this.state.email};${this.state.password}`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          loading: false
        });
        if (res.state) {
          cookies.set("session", res.session);
          cookies.set("user_type", res.admin);
          this.props.history.push("/profile");
        } else {
          alert("Email/Password incorrect, please try again");
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        });
      });
  };

  UNSAFE_componentWillMount() {
    if (
      !(
        cookies.get("session") === null ||
        cookies.get("session") === undefined ||
        cookies.get("session") === ""
      )
    ) {
      this.props.history.push("/profile");
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
          <Button block disabled={!this.validateForm()} type="submit">
            {this.state.loading ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading
              </>
            ) : (
              "Login"
            )}
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
