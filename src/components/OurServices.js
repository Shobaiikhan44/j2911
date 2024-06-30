import React from 'react';
import { Container, Row, Col, Card , Image } from 'react-bootstrap';
import bd_logo from '../assets/bd.png';
import ict_logo from '../assets/ict.png';
import pd_logo from '../assets/pd.png';
import sp_logo from '../assets/sp.png';
import { ImArrowUpRight2 } from "react-icons/im";
import line from '../assets/Line.png'

const OurServices = () => {
    return (
        <Container className="my-5 " >
          <div className=' align-item-center justify-content-center '> 
          <p className='text-center' > <em> OUR SERVICES</em></p>
            <h2 className="text-center mb-4">Leverage Our Expertise</h2>
            <Card className="mb-4 border-0 shadow-sm bg-white w-50 d-flex mt-4"   style={{marginLeft:'25%'}}>
                        <Card.Body className="m-3" >
                            <img src={ict_logo} alt='ICT Consulting' className='card-img-top' style={{ height: '50px', width: '50px', marginBottom: '10px' }} />
                            <Card.Title>ICT Consulting</Card.Title>
                            <Card.Text style={{ color: '#4D4D56' }}>
                                Leverage our expertise in Information and Communication Technology (ICT) to enhance the efficiency and effectiveness of your digital infrastructure. From system integration to cybersecurity, we provide solutions that align with your business goals.
                            </Card.Text>
                            <ImArrowUpRight2 />
                        </Card.Body>
                    </Card>
                    <Image src={line} alt='line'  style={{marginLeft:'50%'}}></Image>
          </div>







           
          <Row className="mt-4"  >
                <Col md={6}>
                <div class="d-flex align-items-center">
    <h3 class="text-primary d-flex align-items-center">
      <span class="btn btn-light rounded-circle circular-button">01 </span>
      &nbsp; &nbsp;&nbsp;Software Development
    </h3> </div>
                   <h6> <strong>Custom Application Development:</strong></h6>
                   <p>Tailor-made software solutions to address specific business needs and challenges,<br/>
                   ensuring seamless integration with your existing systems.
                   </p>  <h6><strong>Mobile App Development:</strong></h6>
                    <p>Creation of robust and user-friendly mobile applications for both iOS and Android<br/>
                    platforms, enhancing your digital presence and accessibility.
                   </p> 
                   <h6><strong> Web Development:</strong></h6> 
                   <p>Development of dynamic and responsive websites and web applications that provide an 
                    <br/>excellent user experience and drive business growth</p>
                </Col>


                <Col md={6}>
                   
                   <div class="d-flex align-items-center">
       <h3 class="text-primary d-flex align-items-center">
         <span class="btn btn-light rounded-circle circular-button">02 </span>
         &nbsp; &nbsp;&nbsp;Project Management
       </h3> </div>
                      <h6> <strong>IT Project Management:</strong></h6>
                      <p>Expert management of IT projects from initiation to completion, ensuring they are delivered<br/>
                      on time, within scope, and within budget.
                      </p>  <h6><strong>Agile and Scrum Methodologies: </strong></h6>
                       <p>Implementation of Agile and Scrum frameworks to enhance project flexibility, <br/>
                       responsiveness, and efficiency.
                      </p> 
                      <h6><strong> Risk Management:</strong></h6> 
                      <p>Identification, assessment, and mitigation of risks associated with IT projects to ensure
                         <br/>successful outcomes</p>
                   </Col>
            </Row>
            <Row className="mt-4">
            <Col md={6}>
                   
                   <div class="d-flex align-items-center">
       <h3 class="text-primary d-flex align-items-center">
         <span class="btn btn-light rounded-circle circular-button">03</span>
         &nbsp; &nbsp;&nbsp;Software Architecture
       </h3> </div>
                      <h6> <strong>Architectural Design:</strong></h6>
                      <p>Creation of scalable and efficient software architectures that support your business <br/>processes and future growth.
                      </p>  <h6><strong>System Architecture Review:</strong></h6>
                       <p>Evaluation and optimization of existing system architectures to improve performance, <br/> reliability, and scalability.
                      </p> 
                      <h6><strong>Microservices Architecture:</strong></h6> 
                      <p>Development and implementation of microservices architectures to enable modular, flexible, and resilient software systems.<br/></p>
                   </Col>
                   <Col md={6}>
                   
                   <div class="d-flex align-items-center">
       <h3 class="text-primary d-flex align-items-center">
         <span class="btn btn-light rounded-circle circular-button">04 </span>
         &nbsp; &nbsp;&nbsp;Software Systems
       </h3> </div>
                      <h6> <strong>Enterprise Resource Planning (ERP) Systems:</strong></h6>
                      <p>Implementation and customization of ERP systems to streamline business processes and <br/>improve operational efficiency.
                      </p>  <h6><strong>Customer Relationship Management (CRM) Systems:</strong></h6>
                       <p>Deployment of CRM systems to enhance customer engagement, retention, <br/>and satisfaction.
                      </p> 
                      <h6><strong> Database Management Systems (DBMS):</strong></h6> 
                      <p>Design, implementation, and maintenance of robust database management systems to <br/>ensure data integrity, security, and accessibility.</p>
                   </Col>
            </Row>
           
 
           
            <Row>
            
                <Col md={4}>
                    <Card className="mb-4 border-0 shadow-sm bg-white " >
                        <Card.Body className="m-4 ">
                            <img src={bd_logo} alt='Business Development' className='card-img-top' style={{ height: '50px', width: '50px', marginBottom: '10px' }} />
                            <Card.Title>Business Development</Card.Title>
                            <Card.Text style={{ color: '#4D4D56' }}>
                                Our business development services are designed to drive your organization forward. We offer strategic insights, market analysis, and tailored growth strategies to propel your business into new heights.
                            </Card.Text>
                            <ImArrowUpRight2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
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
                <Col md={4}>
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

export default OurServices;
