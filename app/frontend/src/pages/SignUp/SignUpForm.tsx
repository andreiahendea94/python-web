import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/SignUpForm.css';
import SimpleSelect from '../../components/Select';
import DarkGreenButton from '../../components/DarkGreenButton';

export default function SignUpForm({className=undefined}: {className?: string}): JSX.Element {

  async function asyncSignUpPost(formData: FormData): Promise<void> {
    try {
      const response = await fetch("http://localhost:8000/api/users/", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        // mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    asyncSignUpPost(formData);
  }




  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Container fluid className="p-0 SignUpForm__FieldsContainer px-5 py-3">
        <p className="SignUpForm__Paragraph">Let's do this!</p>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Label column="sm" lg={12}>First Name</Form.Label>
            <Form.Control name="first_name" type="text" size="sm" placeholder="First name" />
          </Col>
          <Col md={6}>
            <Form.Label column="sm" lg={12}>Last Name</Form.Label>
            <Form.Control name="last_name" type="text" size="sm" placeholder="Last name" />
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Label column="sm" lg={12}>Email</Form.Label>
            <Form.Control name="email" type="email" size="sm" placeholder="Email" />
          </Col>
          <Col md={6}>
            <Form.Label column="sm" lg={12}>Password</Form.Label>
            <Form.Control name="password" type="password" size="sm" placeholder="Password" />
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Label column="sm" lg={12}>Date of birth</Form.Label>
            <Form.Control name="date_of_birth" type="text" size="sm" placeholder="Date of birth" />
          </Col>
          <Col md={6}>
            <Form.Label column="sm" lg={12}>Phone number</Form.Label>
            <Form.Control name="phone_number" type="text" size="sm" placeholder="Phone number" />
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Label column="sm" lg={12}>City</Form.Label>
            <SimpleSelect name="city" isSearchable={true}/>
          </Col>
          <Col md={6}>
            <Form.Label column="sm" lg={12}>Country</Form.Label>
            <SimpleSelect name="country" isSearchable={true}/>
          </Col>
        </Row>

      </Container>
      <Container fluid className="SignUpForm__ButtonContainer">
        <Row>
          <Col className="px-5 py-4">
            <DarkGreenButton type="submit">Create account</DarkGreenButton>
          </Col>
        </Row>
      </Container>
    </Form>
  );

};
