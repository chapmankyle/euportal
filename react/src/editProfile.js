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
import profile from "./images/profile.png";
import "./css/App.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jane",
      surname: "Doe",
      email: "jane.doe@gmail.com",
      cardDetails: [
        {
          name: "Capitec Bank",
          accountNumber: 155874599963,
          code: 47000
        }
      ]
    };
  }
  render() {
    const banks = [
      { name: "ABSA Bank", code: "632005" },
      { name: "Bank of Athens", code: "410506" },
      { name: "Bidvest Bank", code: "462005" },
      { name: "Capitec Bank", code: "470010" },
      { name: "FNB", code: "250655" },
      { name: "Investec Private Bank", code: "580105" },
      { name: "Nedbank", code: "198765" },
      { name: "SA Post Bank (Post Office)", code: "460005" }
    ];

    const updateState = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    const updateProfile = e => {
      e.preventDefault();
      console.log(this.state);
    };

    const updateBank = e => {
      e.preventDefault();
      console.log(this.state);
    };

    const updateProfilePicture = () => {};
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Edit Profile</h1>
          </Container>
        </Jumbotron>
        <Container>
          <br />
          <Row>
            <Col>
              <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                <Tab eventKey="details" title="Personal details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Image src={profile} />
                        <br />
                        <InputGroup size="md" className="mb-3">
                          <Button variant="info" onClick={updateProfilePicture}>
                            Change
                          </Button>
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Name
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="name"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.name}
                            onChange={updateState}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Surname
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="surname"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.surname}
                            onChange={updateState}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Email
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="email"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.email}
                            onChange={updateState}
                          />
                        </InputGroup>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="banking" title="Banking Details">
                  <Card>
                    <Card.Body>
                      {this.state.cardDetails.map((card, index) => (
                        <div>
                          <h3>Card {index + 1}</h3>
                          <br />
                          <InputGroup className="mb-3">
                            <DropdownButton
                              as={InputGroup.Prepend}
                              variant="outline-secondary"
                              title="Bank Name"
                              id="input-group-dropdown-1">
                              {banks.map(bank => (
                                <Dropdown.Item onClick={updateBank}>
                                  {bank.name}
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>
                            <FormControl
                              aria-describedby="basic-addon1"
                              disabled
                              value={card.name}
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-lg">
                                Account Number
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              id={`cardDetails${index}.accountNumber`}
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value={card.accountNumber}
                              onChange={updateState}
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-lg">
                                Branch code
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              id={`cardDetails${index}.code`}
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value={card.code}
                              onChange={updateState}
                              disabled
                            />
                          </InputGroup>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
              <br />
              <Button onClick={updateProfile}>Save Details</Button>
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

export default Profile;
