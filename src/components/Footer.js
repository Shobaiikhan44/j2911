import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#00008B", gap: '20px' }}>
            <Container fluid className="text-white py-4">
                <Row className="justify-content-center p-5">
                    <Col md={6}>
                        <img src={logo} alt="logo" style={{ height: '30px', width: '30px', marginBottom: '40px', filter: 'brightness(0) invert(1)' }} />
                        <p>When do they work well, and when <br />do they on us and finally, when do <br /> we actually need how can we avoid them.</p>
                        <Form>
                            <Form.Group controlId="formNewsletterEmail">
                                <Form.Control type="email" placeholder="Enter your email" style={{ display: 'flex', border: '0', width: '300px' }} />
                            </Form.Group>
                            <Button type="submit" style={{ backgroundColor: 'yellow', color: 'black', marginTop: '20px', marginBottom: '50px' }}>
                                Subscribe &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="text-md-right mt-4 justify-content-center">
                        <Row>
                            <Col xs={6} sm={6} md={4}>
                                <h6 className="mb-4">Quick Links</h6>
                                <ul className="list-unstyled mb-3">
                                    <li className="mb-4"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                                    <li className="mb-4"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                                    <li className="mb-4"><Link to="/ourServices" className="text-white text-decoration-none">Our Services</Link></li>
                                    <li className="mb-4"><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={6} md={4}>
                                <h6 className="mb-4">Utility Pages</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-4"><Link to="/instruction" className="text-white text-decoration-none">Instruction</Link></li>
                                    <li className="mb-4"><Link to="/style-guide" className="text-white text-decoration-none">Style Guide</Link></li>
                                    <li className="mb-4"><Link to="/licenses" className="text-white text-decoration-none">Licenses</Link></li>
                                    <li className="mb-4"><Link to="/404" className="text-white text-decoration-none">404 Not Found</Link></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <h6 className="mb-4">Resources</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-4"><Link to="/support" className="text-white text-decoration-none">Support</Link></li>
                                    <li className="mb-4"><Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
                                    <li className="mb-4"><Link to="/terms-conditions" className="text-white text-decoration-none">Terms & Conditions</Link></li>
                                    <li className="mb-4"><Link to="/strategic-finance" className="text-white text-decoration-none">Strategic Finance</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className=' mt-4'>
                    <Col md={6} className='mt-4'>
                        <p>&copy; 2024 J2911 Resources LLC. All rights reserved.</p>
                    </Col>
                    <Col className='d-flex mt-4 justify-content-end' md={6}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <RiFacebookBoxFill className='mx-2 text-white' />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className='mx-2 text-white' />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='mx-2 text-white' />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className='mx-2 text-white' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
