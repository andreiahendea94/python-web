import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select/async';

export default function RegisterForm() {

  return (
    <>
      <Form>
        <Container fluid className="p-0">
          <Row className="mb-2">
            <Form.Group className="sm" as={Col} controlId="formFirstName">
              <Form.Label column="sm" lg={12}>First Name</Form.Label>
              <Form.Control type="text" size="sm" placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label column="sm" lg={12}>Last Name</Form.Label>
              <Form.Control type="text" size="sm" placeholder="Last name" />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group className="sm" as={Col} controlId="formEmail">
              <Form.Label column="sm" lg={12}>Email</Form.Label>
              <Form.Control type="email" size="sm" placeholder="Email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formPassword">
              <Form.Label column="sm" lg={12}>Password</Form.Label>
              <Form.Control type="password" size="sm" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group className="sm" as={Col} controlId="formCity">
              <Form.Label column="sm" lg={12}>City</Form.Label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isLoading={true}
                isSearchable={true}
                name="city"
                options={[]}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formCountry">
              <Form.Label column="sm" lg={12}>Country</Form.Label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isLoading={true}
                isSearchable={true}
                name="country"
                options={[]}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">Submit</Button>
        </Container>
      </Form>
    </>
  );

};
