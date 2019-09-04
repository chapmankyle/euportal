import React from 'react';
import { Container, Row, Jumbotron, Col, Image, Card, Modal } from 'react-bootstrap/';

import image1 from './images/products/product-1.jpg';
import image2 from './images/products/product-2.jpg';
import image3 from './images/products/product-3.jpg';
import image4 from './images/products/product-4.jpg';
import './css/products.css';

export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      show: false,
      product: {
        name: null,
        id: null,
        text: null,
        description: null,
      }
    }
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        product: res
      });
    });
  }


  render() {
    const product = this.state.product;

    const handleShow = (image) => setShow(image, true);
    const handleClose = () => setShow(null, false);

    const setShow = (image, bool) => {
      this.setState({
        show: bool,
        image
      })
    };

    return (
      <div>
        <Jumbotron>
          <Container>
              <Row>
                <h1>{product.name}</h1>
              </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col lg={7}>
              <Card>
                <Image src={image1} className="mx-auto d-block" fluid
                  onClick={() => handleShow(image1)}/>
                <div>
                  <Row>
                    <Col onClick={() => handleShow(image2)}>
                      <Image src={image2} fluid />
                    </Col>
                    <Col onClick={() => handleShow(image3)}>
                      <Image src={image3} fluid/>
                    </Col>
                    <Col onClick={() => handleShow(image4)}>
                      <Image src={image4} fluid />
                    </Col>
                </Row>
              </div>
              </Card>
            </Col>
            <Col lg={5}>
              <br/>
              <h2 className='text-center'>Description</h2>
              <p>
                <ul>
                  <li>
                  Three levels of world-class noise cancellation for better listening experience in any    environment
                  </li>
                  <li>
                  Alexa-enabled for voice access to music, information, and more
                  </li>
                  <li>
                    Noise-rejecting dual-microphone system for clear sound and voice pick-up
                  </li>
                  <li>
                    Balanced audio performance at any volume
                  </li>
                  <li>
                    Hassle-free Bluetooth pairing, personalized settings, access to future updates, and more through the Bose Connect app
                  </li>
                  <li>
                    Bose AR enabled* — an innovative, audio-only version of augmented reality
                  </li>
                  <li>
                    Unlock Bose AR* via a firmware update through the Bose Connect app
                  </li>
                  <li>
                    Bose AR availability and functionality varies. Bose AR enhanced apps are currently available for iPhone and iPad users only. Apps for Android devices are in development.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>

          <Modal show={this.state.show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.state.image} className="mx-auto d-block" fluid/>>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    )
  }
}
