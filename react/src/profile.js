import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import './App.css';
import Img from 'react-image';
import profile from './profile.png';

class Profile extends React.Component {
    render() {
        return (
            <Container class="main-container">
                <Row>
                    <div class='profile'>
                        <h1>Profile</h1>
                        <br></br>
                        <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                            <Tab eventKey="details" title="My details">
                                <Card>
                                    <Card.Body>
                                        <Img src={profile} /> <br/>
                                        Name: Jane Doe <br />
                                        Email: janedoe@gmail.com<br />
                                        Phone: 0256457788<br /><br />

                                        <Button>Edit Details</Button>
                                    </Card.Body>
                                </Card>
                            </Tab>
                            <Tab eventKey="transaction" title="Transaction History">
                                <NoTransactions />
                            </Tab>
                        </Tabs>
                    </div>
                </Row>
            </Container>
        );
    }
}

function NoTransactions() {
    return (
        <Jumbotron class="noTransactions">
            <h1>You have no past transactions</h1>
            <p> When you buy products they will get listed here for you to view!</p>
        </Jumbotron>
    );
}

export default Profile;