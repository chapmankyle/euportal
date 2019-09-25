import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button } from 'react-bootstrap/';
import Img from 'react-image';
import profile from './images/profile.png';
import './css/App.css';

function ItemCard(props){
    return (
        <div className="col-md-4" onClick={() => (props.push(`/products/${props.id}`))}>
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
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceCard(props){
    return (
        <div className="col-md-4" onClick={() => (props.push(`/products/${props.id}`))}>
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
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export {ItemCard, ServiceCard};