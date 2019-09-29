import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import Img from 'react-image';
import profile from './images/profile.png';
import './css/App.css';
import { ModalButton } from './templates';
import EditProfile from './editProfile';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      surname: "",
      password: "",
      email: "",
      session: "jrod3627653723243"
    };
  }

  componentDidMount() {
    try {
      fetch("/api/get_customer/" + this.state.session)
        .then(response => response.json())
        .then(data => {
          console.log(data[0][1])
          this.setState({
            firstname: data[0][1],
            surname: data[0][2],
            password: data[0][4],
            email: data[0][3],
            session: data[0][5]
          })
        });
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <>
        <Jumbotron>
          <Container>
            <Row>
              <Col md="auto">
                <Img className="profileImg" src={profile} /> <br />
              </Col>
              <Col md="auto">
                <h1>Jane Doe</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container className="main-container">
          <Row className="justify-content-md-center">
            <Col xs lg="20">
              <div className="profile">
                <br></br>
                <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                  <Tab eventKey="details" title="My details">
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col>
                            <h2>Personal Details</h2>
                            Name: {this.state.firstname} {this.state.surname} <br />
                            Email: {this.state.email}
                            <br />
                            <br />
                          </Col>
                          <Col>
                            <h2>Banking Details</h2>
                            Account Number: 155874599963 <br />
                            Bank: Capitec<br />
                            <br />
                          </Col>
                        </Row>
                        <ModalButton buttonName="Edit Details" title="Edit Details" body={<EditProfile firstname={this.state.firstname} surname={this.state.surname} password={this.state.password} email={this.state.email} session={this.state.session}/>} />
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="transaction" title="Transaction History">
                    <Card>
                      <Jumbotron className="noTransactions">
                        <h1>You have no past transactions</h1>
                        <p> When you buy products they will get listed here for you to view!</p>
                      </Jumbotron>
                    </Card>                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
