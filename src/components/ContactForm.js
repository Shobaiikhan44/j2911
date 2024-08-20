<<<<<<< HEAD
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
=======
// src/components/ContactForm.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
>>>>>>> 5fbfa5f (first)

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
<<<<<<< HEAD
    const [successMessage, setSuccessMessage] = useState('');

=======
>>>>>>> 5fbfa5f (first)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
<<<<<<< HEAD

        // Clear the individual error when user corrects the input
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
=======
>>>>>>> 5fbfa5f (first)
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
            // Handle form submission
            console.log('Form submitted:', formData);
<<<<<<< HEAD
            setSuccessMessage('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                service: '',
                message: ''
            });

            // Remove success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } else {
            setErrors(validationErrors);
            setSuccessMessage('');
=======
        } else {
            setErrors(validationErrors);
>>>>>>> 5fbfa5f (first)
        }
    };

    return (
        <div className="my-5 bg-light" style={{ padding: '100px' }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='mt-4'>
                            <h1>Let's Shape the <br />Future Together!</h1>
                            <p>Whether you're aiming to optimize your ICT 
                                <br />infrastructure, drive business growth, 
                                navigate  <br />regulatory
                                landscapes, or form  strategic<br /> partnerships, 
                                J2911 RESOURCES  LLC is <br />
                                here to guide you every step of 
                                <br /> the way.Let's embark on a journey of 
                                <br />innovation, growth, and success. Contact
                                <br /> us today to explore how we can elevate 
                                <br /> your organization to new heights.</p>
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
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='btn m-4'>Send Message</Button>
<<<<<<< HEAD
                            {successMessage && (
                                <Alert variant="success" className='mt-3'>
                                    {successMessage}
                                </Alert>
                            )}
=======
>>>>>>> 5fbfa5f (first)
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactForm;
