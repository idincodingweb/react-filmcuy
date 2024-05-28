import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="herocuy">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <div className="hero-content">
              <h1>Idin Code Movie App</h1>
              <p>Temukan informasi film favorit Anda di sini!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
