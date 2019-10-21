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
  InputGroup,
  Image,
  FormControl,
  DropdownButton,
  Dropdown
} from "react-bootstrap/";
import Img from 'react-image';
import { SliderPicker } from 'react-color';

import logo from "./images/react.png";
import "./css/App.css";

class EditCustomize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryColor: props.theme.primary,
      secondaryColor: props.theme.secondary,
      tertiaryColour: props.theme.tertiary,
      logo: "./images/react.png"
    };
  }
  render() {
    const updateState = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log("Updated")
    };

    return (
      <div>
        <Container>
          <br />
          <Row>
            <Col>
              <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                <Tab eventKey="details" title="Look and Feel">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Img className="logoImg" src={logo} />
                         <input style={{display: 'none'}} type="file" id='fileUpload' />
                        <InputGroup size="md" className="mb-3">
                          <Button variant="info" onClick={() => document.getElementById("fileUpload").click()}>
                            Change
                          </Button>
                        </InputGroup>  
                      </Row>
                        <br />
                        <h4>Primary</h4>
                          <SliderPicker onChangeComplete={colour => this.setState({primaryColour: colour.hex})}
                            color={this.state.primaryColor}
                           />
                           <br />
                        
                        <h4>Secondary</h4>
                          <SliderPicker onChangeComplete={colour => this.setState({secondaryColour: colour.hex})}
                            color={this.state.secondaryColor}
                           />
                        <h4>Tertiary</h4>
                          <SliderPicker onChangeComplete={colour => this.setState({tertiaryColour: colour.hex})}
                            color={this.state.tertiaryColour}
                           />
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
              <br />
              <Button onClick={updateState}>Save Details</Button>
              <Button
                onClick={() => this.props.history.goBack()}
                variant="danger">
                Discard Changes
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EditCustomize;
