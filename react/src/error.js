import React from 'react';
import { Button } from 'react-bootstrap';

import './css/error.css'

export default class Error extends React.Component {
  render() {
    return (
      <div className="align-center">
        <div className="eu-container">
          <div className="eu-content">
            <small className="eu-error">404 ERROR</small>
            <h2 className="eu-text">Hey There! This Is Not The Page You Are Looking For...</h2>
            <p className="eu-subtitle">Sorry for the inconvenience!</p>
          </div>
          <div className="eu-element">
              <a href="/">
                <Button className="eu-home">EPI-USE</Button>
              </a>
          </div>
        </div>
      </div>
    );
  }
}
