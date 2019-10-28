import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormGroup
} from "react-bootstrap/";
import "./css/App.css";

function ItemCard(props) {
  return (
    <Card
      className="shadow trans mt-0"
      style={{ height: "100%" }}
      onClick={() => props.push(`/products/${props.id}`)}
    >
      <Card.Img variant="top" src="../static/images/logo.png" alt="logo" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <strong>{props.name}</strong>
        </Card.Title>
        <Card.Text className="card-text">{props.text}</Card.Text>
        <>
          <Button className="mt-auto" onClick={() => props.addCart(props.item)}>
            Add to cart
          </Button>
          {props.admin ? (
            <ButtonGroup className="mt-2 float-right">
              <Button>Edit</Button> <Button>Delete</Button>
            </ButtonGroup>
          ) : null}
        </>
      </Card.Body>
    </Card>
  );
}

function ServiceCard(props) {
  return (
    <Card
      className="mt-0"
      style={{ height: "100%" }}
      onClick={() => props.push(`/products/${props.id}`)}
    >
      <Card.Img variant="top" src="../static/images/logo.png" alt="logo" />
      <Card.Body>
        <Card.Title>
          <strong>{props.name}</strong>
        </Card.Title>
        <Card.Text className="card-text">{props.text}</Card.Text>
        <>
          <Button onClick={() => props.addCart(props.item)}>
            Request a Quote
          </Button>
          {props.admin ? (
            <>
              <Button>Edit</Button> <Button>Delete</Button>
            </>
          ) : null}
        </>
      </Card.Body>
    </Card>
  );
}

function PaymentCard(props) {
  return (
    <Card
      className="shadow trans mt-0"
      onClick={() => props.push(`/products/${props.id}`)}
    >
      <Card.Img variant="top" src="../static/images/logo.png" alt="logo" />
      <Card.Body>
        <Card.Title>
          <strong>Payment</strong>
        </Card.Title>
        <Card.Text className="card-text">{props.text}</Card.Text>
        <FormGroup controlId="name" bsSize="large">
          <FormLabel>Title</FormLabel>
          <FormControl
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
      </Card.Body>
    </Card>
  );
}

function ModalButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.buttonName}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
      </Modal>
    </>
  );
}

export { ItemCard, ServiceCard, ModalButton, PaymentCard };
