import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bd_logo from '../assets/bd.png';
import ict_logo from '../assets/ict.png';
import pd_logo from '../assets/pd.png';
import sp_logo from '../assets/sp.png';
import { ImArrowUpRight2 } from "react-icons/im";

const Services = () => {
    return (
        <Container className="my-5">
            <p className='text-center' > <em> OUR SERVICES</em></p>
            <h2 className="text-center mb-4">Leverage Our Expertise</h2>
            <Row>
                <Col md={6}>
                    <Card className="mb-4 border-0 shadow-sm bg-white ">
                        <Card.Body className="m-3">
                            <img src={ict_logo} alt='ICT Consulting' className='card-img-top' style={{ height: '50px', width: '50px', marginBottom: '10px' }} />
                            <Card.Title>ICT Consulting</Card.Title>
                            <Card.Text style={{ color: '#4D4D56' }}>
                                Leverage our expertise in Information and Communication Technology (ICT) to enhance the efficiency and effectiveness of your digital infrastructure. From system integration to cybersecurity, we provide solutions that align with your business goals.
                            </Card.Text>
                            <ImArrowUpRight2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 border-0 shadow-sm bg-white">
                        <Card.Body className="m-4">
                            <img src={bd_logo} alt='Business Development' className='card-img-top' style={{ height: '50px', width: '50px', marginBottom: '10px' }} />
                            <Card.Title>Business Development</Card.Title>
                            <Card.Text style={{ color: '#4D4D56' }}>
                                Our business development services are designed to drive your organization forward. We offer strategic insights, market analysis, and tailored growth strategies to propel your business into new heights.
                            </Card.Text>
                            <ImArrowUpRight2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 border-0 shadow-sm bg-white">
                        <Card.Body className="m-3">
                            <img src={pd_logo} alt='Policy Development' className='card-img-top' style={{ height: '50px', width: '50px', marginBottom: '10px' }} />
                            <Card.Title>Policy Development</Card.Title>
                            <Card.Text style={{ color: '#4D4D56' }}>
                                Navigate the complex landscape of regulations and policies with confidence. Our team of experts will work closely with you to develop and implement policies that ensure compliance, mitigate risks, and create a conducive environment for your operations.
                            </Card.Text>
                            <ImArrowUpRight2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 border-0   shadow-sm bg-white">
                        <Card.Body className="m-3">
                            <img src={sp_logo} alt='Strategic Partnerships Development' className='card-img-top' style={{ height: '50px', width: '50px', marginBottom: '10px' }} />
                            <Card.Title>Strategic Partnerships Development</Card.Title>
                            <Card.Text style={{ color: '#4D4D56' }}>
                                Foster valuable connections and collaborations that propel your business forward. We specialize in identifying, negotiating, and cultivating strategic partnerships that enhance your market presence and create mutually beneficial opportunities.
                            </Card.Text>
                            <ImArrowUpRight2 />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
