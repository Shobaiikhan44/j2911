import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={Logo} alt='logo' style={{ width: "50px", marginRight: "150px" }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/ourServices">Our Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {!isMobile && (
                            <Nav.Item style={{ marginLeft: '600px' }}>
                                <Button href="#quote" className="btn btn-primary text-white">Get a Quote &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Button>
                            </Nav.Item>
                        )}
                    </Nav>
                    {isMobile && (
                        <Nav.Item className="mt-3">
                            <Button href="#quote" className="btn btn-primary text-white btn-block">Get a Quote &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Nav.Item>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
