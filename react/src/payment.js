import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import Img from 'react-image';
import profile from './images/profile.png';
import './css/App.css';
import { PaymentCard } from './templates';
import EditProfile from './editProfile';
import cookies from './cookiestore';

class Payment extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
  
      <PaymentCard />
  
    );
  }
}

export default Payment;
