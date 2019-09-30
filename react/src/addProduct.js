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
  FormGroup,
  Image,
  FormControl,
  FormLabel,
  DropdownButton,
  Dropdown,
  ButtonGroup
} from "react-bootstrap/";
import profile from "./images/profile.png";
import "./css/App.css";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      title: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      newProduct: null
    };
  }

      validateForm() {
        return (
          this.state.title !== "" &&
          this.state.price !== "" &&
          this.state.quantity !== ""
        );
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        try {
          this.setState({ newProduct: true });
          fetch("/api/add_product/" + this.state.title + ";" + this.state.description +
           ";" + this.state.price +";" + this.state.quantity);
          // TODO: Log in the user and redirect page
        } catch (e) {
          alert(e.message);
        }

        this.setState({ isLoading: false });
      }

  render() {
    const updateProfile = e => {
      console.log(this.state);
      try {
        fetch("/api/update_customer/" + this.state.name + ";" + this.state.surname + ";" +
        this.state.password + ";" + this.state.email + ";" + this.state.session ).then(() => window.location.reload())
      } catch (e) {
        alert(e.message);
      }
    };

    const addPhoto = () => {};
    return (
      <Container>
        <Card className="mt-0">
          <Card.Body>
            <form onSubmit={this.handleSubmit}>
              <Image src={profile} />
              <br />
              <FormGroup size="md" className="mb-3">
                <Button variant="info" onClick={addPhoto}>
                  Add Picture
                </Button>
              </FormGroup>
                <FormGroup controlId="title" bsSize="large">
                  <FormLabel>Title</FormLabel>
                    <FormControl
                      id="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      />
                </FormGroup>
              <FormGroup controlId="description" bsSize="large">
                <FormLabel>Discription</FormLabel>
                <FormControl
                  as="textarea"
                  value={this.state.description}
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup controlId="price" bsSize="large">
                <FormLabel>Price</FormLabel>
                <FormControl
                  id="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup controlId="quantitiy" bsSize="large">
                <FormLabel>Quantitiy</FormLabel>
                <FormControl
                  id="quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  />
              </FormGroup>
            </form>
          </Card.Body>
        </Card>
        <br />
          <Button
            disabled={!this.validateForm()}
            type="submit">
            Add
            </Button>
        <Button
          className="float-right"
          onClick={() => this.props.history.goBack()}
          variant="danger">
          Cancel
        </Button>
      </Container>
    );
  }
}

export default EditProfile;
