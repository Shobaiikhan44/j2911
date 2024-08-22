import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear the individual error when user corrects the input
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
        if (!formData.service) newErrors.service = 'Service selection is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setSuccessMessage('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                service: '',
                message: ''
            });

            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } else {
            setErrors(validationErrors);
            setSuccessMessage('');
        }
    };

    return (
        <div className="my-5 bg-light" style={{ padding: '50px 15px', fontFamily: "'Lora', serif" }}>
            <Container>
                <Row>
                    <Col md={6} className="mb-4">
                        <div className='mt-4'>
                            <h1 className="display-5" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 'bold' }}>
                                Let's Shape the <br />Future Together!
                            </h1>
                            <p className="lead">
                                Whether you're aiming to optimize your ICT 
                                infrastructure, drive business growth, 
                                navigate regulatory landscapes, or form 
                                strategic partnerships, J2911 RESOURCES LLC 
                                is here to guide you every step of the way. 
                                Let's embark on a journey of innovation, 
                                growth, and success. Contact us today to 
                                explore how we can elevate your organization 
                                to new heights.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.name}
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.email}
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formService">
                                <Form.Label>What service are you interested in?</Form.Label>
                                <Form.Control 
                                    as="select" 
                                    name="service" 
                                    value={formData.service} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.service}
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                >
                                    <option value="">Select a service</option>
                                    <option value="ICT Consulting">ICT Consulting</option>
                                    <option value="Business Development">Business Development</option>
                                    <option value="Policy Development">Policy Development</option>
                                    <option value="Strategic Partnerships Development">Strategic Partnerships Development</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.service}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    isInvalid={!!errors.message}
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn m-4 w-100 w-md-auto" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                Send Message
                            </Button>
                            {successMessage && (
                                <Alert variant="success" className="mt-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                    {successMessage}
                                </Alert>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactForm;
