import React from "react";
import {
  Tabs,
  Tab,
  Container,
  Row,
  Jumbotron,
  Card,
  Col,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  Spinner
} from "react-bootstrap/";
import Img from "react-image";
import profile from "./images/profile.png";
import "./css/App.css";
import { ModalButton, PaymentCard } from "./templates";
import EditProfile from "./editProfile";
import cookies from "./cookiestore";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstname: "",
      surname: "",
      email: "",
      password: "",
      session: "",
      loading: true
    };
  }

  UNSAFE_componentWillMount() {
    if (!cookies.get("session")) {
      this.props.history.push("/login");
      return;
    }
    let url = `/api/get_${
      cookies.get("user_type") ? "staff" : "customer"
    }/${cookies.get("session")}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          firstname: data[1],
          surname: cookies.get("user_type") ? "" : data[2],
          email: cookies.get("user_type") ? data[3] : data[3],
          loading: false
        });
      })
      .catch(e => {
        alert(e.message);
      });
  }

  render() {
    return (
      <>
        {" "}
        {this.state.loading ? (
          <Row className="h-100 w-100">
            <Col
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                transform: "translate(50%)"
              }}
            >
              <Spinner animation="grow" /> Loading...
            </Col>
          </Row>
        ) : (
          <>
            <Jumbotron>
              <Container>
                <Row>
                  <Col md="auto">
                    <Img className="profileImg" src={profile} /> <br />
                  </Col>
                  <Col md="auto">
                    <h1>
                      {this.state.firstname} {this.state.surname}
                    </h1>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
            <Container className="main-container">
              <Row className="justify-content-md-center">
                <Col xs lg="20">
                  <div className="profile">
                    <br></br>
                    <Tabs
                      defaultActiveKey="details"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="details" title="My details">
                        <Card className="mt-0">
                          <Card.Body>
                            <Row>
                              <Col>
                                <h2>Personal Details</h2>
                                Name: {this.state.firstname}{" "}
                                {this.state.surname} <br />
                                Email: {this.state.email}
                                <br />
                                <br />
                              </Col>
                              <Col>
                                <h2>Banking Details</h2>
                                Account Number: 155874599963 <br />
                                Bank: Capitec
                                <br />
                                <br />
                              </Col>
                            </Row>
                            <ModalButton
                              buttonName="Edit Details"
                              title="Edit Details"
                              body={
                                <EditProfile
                                  firstname={this.state.firstname}
                                  surname={this.state.surname}
                                  password={this.state.password}
                                  email={this.state.email}
                                  session={this.state.session}
                                />
                              }
                            />
                          </Card.Body>
                        </Card>
                      </Tab>
                      <Tab eventKey="transaction" title="Transaction History">
                        <Card className="mt-0">
                          <Jumbotron className="noTransactions">
                            <h1>You have no past transactions</h1>
                            <p>
                              {" "}
                              When you buy products they will get listed here
                              for you to view!
                            </p>
                          </Jumbotron>
                        </Card>
                      </Tab>
                    </Tabs>
                    {/* <PaymentCard /> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}

export default Profile;
