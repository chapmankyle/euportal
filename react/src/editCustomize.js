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

import logo from "./images/react.png";
import "./css/App.css";

class EditCustomize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryColor: "Dark Gray",
      secondaryColor: "Light Blue/Gray",
      accentColor: "Light Blue",
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
                        <Img class="logoImg" src={logo} />
                        <InputGroup size="md" className="mb-3">
                          <Button variant="info" onClick={updateState}>
                            Change
                          </Button>
                        </InputGroup>                        <br />
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Primary Color
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="name"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.primaryColor}
                            onChange={updateState}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                            Secondary Color
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="surname"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.secondaryColor}
                            onChange={updateState}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Accent Color
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="email"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.accentColor}
                            onChange={updateState}
                          />
                        </InputGroup>
                      </Row>
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
