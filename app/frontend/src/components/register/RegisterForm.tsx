import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegisterForm() {

  return (
    <>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );

};
