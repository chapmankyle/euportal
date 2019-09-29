import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import Img from 'react-image';
import logo from './images/react.png'
import './css/App.css';
import EditCustomize from "./editCustomize"
import {ModalButton} from './templates';


class Customize extends React.Component {
  render() {
    return (
      <>
        <CustomizeBanner />
        <Container class="main-container">
          <Row className="justify-content-md-center">
            <Col xs lg="20">
              <div class='Customize'>
                <br></br>
                <CustomizeTabs />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function CustomizeBanner() {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <h1>Customize!</h1>
        </Row>
      </Container>
    </Jumbotron>
  );
}

function LookAndFeel() {
  return (
    <Col>
      <h2>Look and Feel</h2>
      <h6>Primary Color</h6>Dark Grey <br />
      <h6>Secondary Color</h6>Light Blue/Grey<br />
      <h6>Accent Color</h6>Light Blue <br /><br />
      <ModalButton buttonName="Edit Look and Feel" title="Edit Look and Feel" body={<EditCustomize />} />
    </Col>
  );
}

function Logo() {
  return (
    <Col>
      <h2>Your Logo</h2>
      <Img class="logoImg" src={logo} /><br /><br />
    </Col>
  );
}

function Categories() {
  return (
    <Col>
      <h2>Current Categories</h2>
      <ul>
        <li>Shoes</li>
        <li>Dresses</li>
        <li>Skirts</li>
      </ul>
    </Col>
  );
}

function CustomizeTabs() {
  return (
    <Tabs defaultActiveKey="lookandfeel" id="uncontrolled-tab-example">
      <Tab eventKey="lookandfeel" title="Look And Feel">
        <Card>
          <Card.Body>
            <Row>
              <LookAndFeel />
              <Logo />
            </Row>
          </Card.Body>
        </Card>
      </Tab>
      <Tab class="categories" eventKey="categories" title="Categories">
        <Card>
          <Card.Body>
            <Row>

              <Col md="auto">
                <Categories /> <br />
                <Button>Edit Categories</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Tab>
    </Tabs>
  );
}

export default Customize;
