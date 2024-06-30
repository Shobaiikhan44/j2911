// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WhyChooseUs = () => {
    return (
        <div  style={{'backgroundColor': "#00008B"   , gap: '20px'}}>
                 <Container className="my-5  text-white  py-5 p-4">
            <div  className='text-center'  style={{'marginBottom':'90px'}} >
            <p  className='badge '   > <em>why choose us</em> </p>
            <h2>The Leading Edge <br />in the Industry</h2>
            </div>
            
            <Row className="mt-4"  >
                <Col md={4}>
                     <span className='btn btn-primary rounded-circle  circular-button mb-3'>01</span>
                    <h3>Expertise</h3>
                    <p>Our team comprises seasoned professionals with diverse backgrounds in ICT, business development, policy, and strategic partnerships.</p>
                </Col>
                <Col md={4}>
                <span className='btn btn-primary rounded-circle  circular-button mb-3'>02</span>
                    <h3>Tailored Solutions</h3>
                    <p>We understand that every business is unique. Our solutions are customized to address your specific challenges and opportunities.</p>
                </Col>
                <Col md={4}>
                <span className='btn btn-primary rounded-circle  circular-button mb-3'>03</span>
                    <h3>Proven Track Record</h3>
                    <p >We have successfully guided numerous organizations to achieve their objectives, fostering partnerships, growth, and resilience.</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                <span className='btn btn-primary rounded-circle  circular-button mb-3'>04</span>
                    <h3>Innovation</h3>
                    <p >Embrace the latest trends and technologies with our forward-thinking approach to consulting, staying ahead of the curve.</p>
                </Col>
                <Col md={4}>
                <span className='btn btn-primary rounded-circle  circular-button mb-3'>05</span>
                    <h3>Client-Centric Approach</h3>
                    <p>Your success is our priority. We work collaboratively, ensuring deep understanding of your business objectives.</p>
                </Col>
                <Col md={4}>
                <div > 
                <div class="card bg-primary border-0 shadow-sm m-4" style={{width: "18rem" }}>
  
  <div class="card-body " >
    <h5 class="card-title">Let's guide you every step <b /> of the way </h5>
    
    <a href="/" class="btn m-1" style={{backgroundColor : "yellow"}}> Get a Quote &nbsp; <FontAwesomeIcon icon={faArrowRight}/> </a>
  </div>
</div>
                </div>
              
                </Col>
            </Row>
        </Container>
        </div>
   
    );
};

export default WhyChooseUs;
