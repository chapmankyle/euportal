import React, { useState } from 'react';
import { Card, Button, Modal, ButtonGroup} from 'react-bootstrap/';
import './css/App.css';

function ItemCard(props) {
  return (
      <Card className="shadow trans mt-0" onClick={() => (props.push(`/products/${props.id}`))}>
        <Card.Img variant="top" src="../static/images/logo.png" alt="logo" />
        <Card.Body>
          <Card.Title ><strong>{props.name}</strong></Card.Title>
          <Card.Text className="card-text">{props.text}</Card.Text>
          <>
          <Button onClick={() => props.addCart(props.item)}>Add to cart</Button>
            {props.admin ? (
                <ButtonGroup className="float-right">
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
  <Card className="shadow trans mt-0" onClick={() => (props.push(`/products/${props.id}`))}>
          <Card.Img variant="top" src="../static/images/logo.png" alt="logo" />
          <Card.Body>
            <Card.Title ><strong>{props.name}</strong></Card.Title>
            <Card.Text className="card-text">{props.text}</Card.Text>
            <>
            {/* TODO: Move to different file as the onclick handle break it */}
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

function ModalButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>{props.buttonName}</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
      </Modal>
    </>
  );
}


export { ItemCard, ServiceCard, ModalButton };
