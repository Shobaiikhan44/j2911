import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../assets/Container.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div className='bg-light'>
            <Container className="my-2">
                <Row className="align-items-center">
                    <Col lg={6} className="order-lg-1 order-2">
                        <Image 
                            src={img} 
                            alt="about us image" 
                            fluid 
                            className="w-100"
                            style={{
                                maxHeight: '634px',
                                marginTop: '20px',
                                opacity: '1',
                            }}
                        />
                    </Col>
                    <Col lg={6} className="order-lg-2 order-1">
                        <div style={{ marginTop: '100px' }}>
                            <p><em>ABOUT US</em></p>
                            <h2>Welcome to J2911 <br />Resources LLC</h2>
                            <p>
                                <span>Welcome to J2911 RESOURCES LLC - 
                                Your Trusted and Resourceful Partner in ICT Consulting, Business Development, Policy, and Strategic Partnerships.</span>
                            </p>
                            <p>
                                At J2911 RESOURCES LLC, we pride ourselves on being a leading consultancy firm,
                                specializing in a comprehensive range of services tailored to meet the dynamic needs of the
                                modern business landscape. With a wealth of experience and
                                a proven track record, we are committed to empowering your organization for sustained growth and success.
                            </p>
                            <Button className='btn btn-primary btn-lg mt-4'>
                                Learn More &nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
