// import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import RegisterForm from '../components/register/RegisterForm';
import Logo from '../assets/TestLogo.png'
import '../assets/Register.css';
import ImgBg from '../assets/register-image.jpg';

export default function RegisterPage() {
  return (
    <Container fluid className="RegisterPage__Container">
      <Row>
        <Col md={5} className="p-0 RegisterPage__BackgroundImage">
            <div className="RegisterPage__Logo">
              <Image className="RegisterPage__Logo__Image" src={Logo} alt="Register Page Image"></Image>
              <h1 className="RegisterPage__Logo__Text">Verdant</h1>
            </div>
        </Col>
        <Col md={7}>
          <Container>
            <Row></Row>
            <Row>
              <Col>
                <RegisterForm />
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
