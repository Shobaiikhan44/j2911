// src/components/HeroSection.js
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import hero from '../assets/hero-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
 // Custom CSS for additional styling

const HeroSection = () => {
  return (
<<<<<<< HEAD
    <Container className="hero-section text-start my-5">
      <Row>
        <Col md={6} className="text-start mt-md-5 mt-3">
          <div>
            <p className="badge bg-secondary">Your resourceful partner</p>
            <h1>Empowering</h1>
            <h1>Organizations for a</h1>
            <h1>Dynamic Future</h1>
            <p>
              We envision a future where organizations transcend boundaries and <br />
              embrace innovation to thrive in an ever-evolving landscape.
            </p>
            <Button variant="primary" href="#quote" className="btn btn-lg">
              Get a Quote &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            &nbsp;
            <Button variant="secondary" href="#learn-more" className="ml-md-3 btn btn-lg">
=======
    <Container className="text-start my-5 ">
      <Row>
        <Col md={6}>
          <div className="text-start" style={{'marginTop': '100px'}}>
            <p className='badge bg-secondary'>Your resourceful partner</p>
            <h1>Empowering</h1>
            <h1>Organizations for a</h1>
            <h1>Dynamic Future</h1>
            <p>We envision a future where organizations transcend boundaries and <br />embrace innovation to thrive in an ever-evolving landscape.</p>
            
            <Button variant="primary" href="#quote" className='btn btn-lg'>
              Get a Quote &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Button> &nbsp;
            <Button variant="secondary" href="#learn-more" className="ml-3 btn btn-lg">
>>>>>>> 5fbfa5f (first)
              Learn More
            </Button>
          </div>
        </Col>
<<<<<<< HEAD
        <Col md={6} className="mt-3 mt-md-0">
=======
        <Col md={6}>
>>>>>>> 5fbfa5f (first)
          <Image src={hero} alt="Hero Image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
