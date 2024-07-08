import React from 'react';
import { Container, Row, Col, Image  , Button} from 'react-bootstrap';
import img from '../assets/Container.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const AboutUs = () => {

    return (
        <div className='bg-light'> <Container className="my-5 " >
        <Row >
            <Col md={6}>
                <Image src={img} alt="about us image" fluid style={{'width': '608px',
'height': '634px',
'top': '80px',
'left': '100px',
'gap': '0px',
'opacity': '0px',
}}/>
            </Col>
            <Col md={6}>
            <div style={{'marginTop':'100px'}}>
          
                <p ><em> ABOUT US </em></p>
                <h2>Welcome to J2911 <br />Resources LLC</h2>
                <p> <span>Welcome to J2911 RESOURCES LLC - 
                Your Trusted and Resourceful Partner in ICT Consulting, Business Development, Policy, and Strategic Partnerships.</span></p>
                <p>
                    At J2911 RESOURCES LLC, we pride ourselves on being a leading consultancy firm,
                    specializing in a comprehensive range of services tailored to meet the dynamic needs of the
                    modern business landscape. With a wealth of experiensnice and
                    a proven track record, we are committed to empowering your organization for sustained growth and success.
                </p>
                 <Button className='btn btn-primary btn-lg mt-4'> Learn More &nbsp; <FontAwesomeIcon icon={faArrowRight}/></Button>
                </div>
            </Col>
        </Row>
    </Container></div>
        
    );
};

export default AboutUs;
