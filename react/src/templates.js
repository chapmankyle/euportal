import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button, Modal, FormControl , InputGroup} from 'react-bootstrap/';
import Img from 'react-image';
import profile from './images/profile.png';
import './css/App.css';

function ItemCard(props) {
  return (
    <div className="col-md-4">
      <div className="card shadow trans">
        <img className="card-img-top" src="../static/images/logo.png" alt="logo" />
        <div className="card-body">
          <h5 className="card-title"><strong>{props.name}</strong></h5>
          <hr />
          <p className="card-text">{props.text}</p>
          {props.admin ? (
            // TODO: Make buttons look beautiful
            <div>
              <Button>Edit</Button> <Button>Delete</Button>
              <br /><br />
            </div>
          ) : null}
          <div>
            <Button onClick={() => props.push(`/products/${props.id}`)}>View</Button>
            <br />
            <br />
            <Button onClick={() => props.addToCart(props.id, props.name, props.price)}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div >
  );
}

function ServiceCard(props) {
  return (
    <div className="col-md-4">
      <div className="card shadow trans">
        <img className="card-img-top" src="../static/images/logo.png" alt="logo" />
        <div className="card-body">
          <h5 className="card-title"><strong>{props.name}</strong></h5>
          <hr />
          <p className="card-text">{props.text}</p>
          {props.admin ? (
            // TODO: Make buttons look beautiful
            <div>
              <Button>Edit</Button> <Button>Delete</Button>
              <br /><br />
            </div>
          ) : null}
          <div>
            <Button onClick={() => props.addToCart(props.item)}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div >
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export { ItemCard, ServiceCard, ModalButton };
