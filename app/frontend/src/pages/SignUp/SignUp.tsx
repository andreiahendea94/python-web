import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from './SignUpForm';
import Image from 'react-bootstrap/Image'

import Logo from '../../assets/TestLogo.png'
import '../../assets/SignUp.css';

export default function SignUp() {
  return (
    <Container fluid>
      <Row>
        <Col md={5} className="p-0 SignUp__BackgroundImage">
            <div className="SignUp__Logo">
              <Image className="SignUp__Logo__Image" src={Logo} alt="SignUp Image"></Image>
              <h1 className="SignUp__Logo__Text">Verdant</h1>
            </div>
        </Col>
        <Col md={7} className="SignUp__InfoColumn">
          <Row>
            <Col className="SignUp__InfoColumn__Row__IntroductionText px-5 py-3">
              <p>
                This is not a real online service! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Necessitatibus, commodi!
                Sign up <i>now</i> to get started.
              </p>
              <p>You <i>know</i> you want to.</p>
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <SignUpForm className={"SignUp__Form"}/>
            </Col>
          </Row>
          <Row>
            <Col className="px-5 py-1">
              <p>Already have an account? <a href="#">Log in</a></p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
