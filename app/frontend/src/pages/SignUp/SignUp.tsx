import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RegisterForm from './SignUpForm';
import Image from 'react-bootstrap/Image'

import Logo from '../../assets/TestLogo.png'
import '../../assets/SignUp.css';

export default function SignUp() {
  return (
    <Container fluid className="SignUp__Container">
      <Row>
        <Col md={5} className="p-0 SignUp__BackgroundImage">
            <div className="SignUp__Logo">
              <Image className="SignUp__Logo__Image" src={Logo} alt="SignUp Image"></Image>
              <h1 className="SignUp__Logo__Text">Verdant</h1>
            </div>
        </Col>
        <Col md={7}>
          <Container>
            <Row>
              <Col className="SignUp__IntroductionText">
                <p>
                  This is not a real online service! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, commodi!
                  Sign up <i>now</i> to get started.
                </p>
                <p>You <i>know</i> you want to.</p>
              </Col>
            </Row>
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
