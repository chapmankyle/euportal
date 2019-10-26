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

class EditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      newProduct: null
    };
  }

  validateForm() {
    return (
      this.state.name !== "" &&
      this.state.price !== "" &&
      this.state.stock !== ""
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
      fetch("/api/update_product/" + this.state.name + ";" + this.state.description +
      ";" + this.state.price +";" + this.state.stock);
      // TODO: refresh products page
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  render() {

    const addPhoto = () => {};
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
        <Card className="mt-0">
          <Card.Body>

              <Image src={profile} />
              <br />
              <FormGroup size="md" className="mb-3">
                <Button variant="info" onClick={addPhoto}>
                  Add Picture
                </Button>
              </FormGroup>
              <FormGroup controlId="name" bsSize="large">
                <FormLabel>Title</FormLabel>
                <FormControl
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup controlId="description" bsSize="large">
                <FormLabel>Discription</FormLabel>
                <FormControl
                  as="textarea"
                  id="description"
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
              <FormGroup controlId="stock" bsSize="large">
                <FormLabel>Quantitiy</FormLabel>
                <FormControl
                  id="stock"
                  value={this.state.stock}
                  onChange={this.handleChange}
                  />
              </FormGroup>

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
        </form>
      </Container>

    );
  }
}

export default EditProducts;
