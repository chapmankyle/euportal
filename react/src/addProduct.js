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

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.firstname,
      surname: props.surname,
      email: props.email,
      password: props.password,
      session: props.session,
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
      console.log("Update")
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    const updateProfile = e => {
      console.log(this.state);
      try {
        fetch("/api/update_customer/" + this.state.name + ";" + this.state.surname + ";" +
        this.state.password + ";" + this.state.email + ";" + this.state.session ).then(() => window.location.reload())
      } catch (e) {
        alert(e.message);
      }
    };

    const updateBank = e => {
      e.preventDefault();
      console.log(this.state);
    };

    const addPhoto = () => {};
    return (
      <div>
        <Container>
                  <Card>
                    <Card.Body>
                        <Image src={profile} />
                        <br />
                        <InputGroup size="md" className="mb-3">
                          <Button variant="info" onClick={addPhoto}>
                            Add Picture
                          </Button>
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Title
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
                            <InputGroup.Text>Desc.</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            as="textarea"
                            id="Description"
                            aria-label="Small"
                            value={this.state.surname}
                            onChange={updateState}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">
                              Price
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
                    </Card.Body>
                  </Card>
              <br />
              <Button onClick={updateProfile}>Save Details</Button>
              <Button
                className="float-right"
                onClick={() => this.props.history.goBack()}
                variant="danger">
                Discard Changes
              </Button>
        </Container>
      </div>
    );
  }
}

export default EditProfile;
