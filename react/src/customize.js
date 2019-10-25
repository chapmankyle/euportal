import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import Img from 'react-image';
import logo from './images/react.png'
import './css/App.css';
import EditCustomize from "./editCustomize"
import { ModalButton } from './templates';
import { connect } from 'react-redux';
import { updateTheme } from './actions/theme';
import { bindActionCreators } from "redux";

class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        primary: `#${props.theme.primary.toUpperCase()}`,
        secondary: `#${props.theme.secondary.toUpperCase()}`,
        tertiary: `#${props.theme.tertiary.toUpperCase()}`,
        aboutus: `#${props.theme.about_us.toUpperCase()}`,
      }
    };
  }


  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <>
        <CustomizeBanner />
        <Container className="main-container">
          <Row className="justify-content-md-center">
            <Col xs lg="20">
              <div className='Customize'>
                <br></br>
                <CustomizeTabs updateTheme={this.props.updateTheme} theme={this.state.theme} />
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

function LookAndFeel(props) {
  return (
    <Col>
      <h2>Look and Feel</h2>
      <br />
      <h6>Primary Color</h6>
      {props.theme.primary}
      <br /><br />
      <h6>Secondary Color</h6>
      {props.theme.secondary}
      <br /><br />
      <h6>Accent Color</h6>
      {props.theme.tertiary}
      <br /><br />
      <ModalButton buttonName="Edit Look and Feel" title="Edit Look and Feel"
      body={<EditCustomize updateTheme={props.updateTheme} theme={props.theme} />} />
    </Col>
  );
}

function Logo() {
  return (
    <Col>
      <h2>Your Logo</h2>
      <br />
      <Img className="logoImg" src={logo} /><br /><br />
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

function CustomizeTabs(props) {
  return (
    <Tabs defaultActiveKey="lookandfeel" id="uncontrolled-tab-example">
      <Tab eventKey="lookandfeel" title="Look And Feel">
        <Card className="mt-0">
          <Card.Body>
            <Row>
              <LookAndFeel theme={props.theme} updateTheme={props.updateTheme} />
              <Logo />
            </Row>
          </Card.Body>
        </Card>
      </Tab>
      <Tab className="categories" eventKey="categories" title="Categories">
        <Card className="mt-0">
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

function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateTheme }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Customize);
