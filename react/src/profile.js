import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import Img from 'react-image';
import profile from './images/profile.png';
import './css/App.css';

class Profile extends React.Component {

  render() {
    return (
      <>
        <ProfileBanner />
        <Container class="main-container">
          <Row className="justify-content-md-center">
            <Col xs lg="20">
              <div class='profile'>
                <br></br>
                <ProfileTabs />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function NoTransactions() {
  return (
    <Card>
      <Jumbotron class="noTransactions">
        <h1>You have no past transactions</h1>
        <p> When you buy products they will get listed here for you to view!</p>
      </Jumbotron>
    </Card>
  );
}

function ProfileBanner() {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col md="auto">
            <Img class="profileImg" src={profile} /> <br />
          </Col>
          <Col md="auto">
            <h1>Jane Doe</h1>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

function PersonalDetails() {
  return (
    <Col>
      <h2>Personal Details</h2>
      Name: Jane Doe <br />
      Email: janedoe@gmail.com<br />
      Phone: 0256457788<br /><br />
    </Col>
  );
}

function BankingDetails() {
  return (
    <Col>
      <h2>Banking Details</h2>
      Account Number: 155874599963 <br />
      Bank: Capitec<br /><br />
    </Col>
  );
}

function ProfileTabs() {
  return (
    <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
      <Tab eventKey="details" title="My details">
        <Card>
          <Card.Body>
            <Row>
              <PersonalDetails />
              <BankingDetails />
            </Row>
            <Button>Edit Details</Button>
          </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="transaction" title="Transaction History">
        <NoTransactions />
      </Tab>
    </Tabs>
  );
}

export default Profile;
