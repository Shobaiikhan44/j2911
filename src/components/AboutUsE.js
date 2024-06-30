import React from 'react';
import { Container, Row, Col, Image  , Button} from 'react-bootstrap';
import img from '../assets/AboutUsE.png';
import vision from '../assets/vision.png';
import our_mission from '../assets/our_mission.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const AboutUsE = () => {

    return (
        <div  > 
            <Container className="my-5   "style={{height : '650px' , width :'1440' , top : '124px'}} >
        <Row >
           
            <Col md={6}>
            <div style={{'marginTop':'10px'}}>
          
                <p ><em> ABOUT US </em></p>
                <h2>Welcome to J2911 <br />Resources LLC</h2>
                <p> <span>Welcome to J2911 RESOURCES LLC - 
                Your Trusted and Resourceful Partner in ICT Consulting, Business Development, Policy, and Strategic Partnerships.</span></p>
                <p>
                    At J2911 RESOURCES LLC, we pride ourselves on being a leading consultancy firm,
                    specializing in a comprehensive range of services tailored to meet the dynamic needs of the
                    modern business landscape. With a wealth of experience and
                    a proven track record, we are committed to empowering your organization for sustained growth and success.
                </p>
                 <Button className='btn btn-primary btn-lg mt-4'> Learn More &nbsp; <FontAwesomeIcon icon={faArrowRight}/></Button>
                </div>
            </Col>
            <Col md={6}>
                <Image src={img} alt="about us image" fluid style={{'width': '608px',
'height': '634px',
'top': '80px',
'left': '100px',
'gap': '0px',
'opacity': '0px',
}}/>
            </Col>
        </Row>
      
    </Container>
    <Container   style={{top:'941px' , left:'100px' , gap:'24px' }}>
             <Row>
            <Col md={6}>
            <Image src={our_mission} alt="about us image" fluid style={{'width': '608px',
'height': '354px',
'top': '80px', 
radius: '12px'
}}/>
            </Col>
            <Col md= {6}>
            <p ><em> OUR VISION </em></p>
             <h1> Empowering <br /> Organizations for a  <br />Dynamic Future   </h1>       
             <p>At J2911 RESOURCES LLC, we envision a future where organizations transcend boundaries<br/>
              and embrace innovation to thrive in an ever-evolving landscape. Our vision is to be the <br/>
               catalyst that empowers businesses to navigate challenges, leverage technology, foster<br/>
               strategic collaborations, and achieve sustained success.</p>   
            </Col>
        </Row>
    </Container>



    <Container   style={{top:'941px' , left:'100px' , gap:'24px' , marginTop:'100px' , marginBottom:'80px' }}>
             <Row>
             <Col md= {6}>
            <p ><em> OUR MISSION </em></p>
             <h1> Guiding Excellence, <br />Driving Innovation </h1>       
             <p>Our mission at J2911 RESOURCES LLC is to guide organizations towards excellence by <br/>
              providing tailored solutions in ICT consulting, business development, policy, and strategic <by/>
              partnerships. We are committed to driving innovation, cultivating lasting relationships,<br/> and 
               ensuring our clients are well-equipped to adapt, grow, and lead in their respective <br/>industries.
                Through a client-centric approach, expertise, and a passion for transformative  <br/>change,
                we strive to be the trusted partner that propels businesses to new heights of success..</p>   
            </Col>
            <Col md={6}>
            <Image src={vision} alt="about us image" fluid style={{'width': '608px',
'height': '354px',
'top': '80px',
radius: '12px'
}}/>
            </Col>
            
        </Row>
    </Container>
    </div>
        
    );
};

export default AboutUsE;
