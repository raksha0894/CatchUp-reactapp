import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import history from './../history';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgb(72,92,116)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 20,
  paddingBottom: 20,
  width: 300,
  position: 'absolute',
  right: 0,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();
    history.push('/home');
    window.location.reload();
    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
