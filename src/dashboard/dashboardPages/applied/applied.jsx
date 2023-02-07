import React from 'react'
import "../myPosts/posts.css"
import "../../../auth/auth.css"

import user from "../../../../src/assets/user.png"
import { Row, Col } from "react-bootstrap";

const Applied = () => {
  return (
    <>
    
    

    <section className='job-list' id="jobs">

        <div className='job-card'>
            <Row>
                <Col md={2} >
                <img className='job-profile' src={user}  alt="dp" />
                </Col>
                <Col md={8} className='job-detail'>
                <h6>Tesla</h6>
                    <h5>Lorem ipsum</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              
                </Col>
                <Col md={2} className='job-level'>
                <Row>
                <p>Status</p>
                <p>You are Rejected</p>
                </Row>
               
    
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div className='job-posted'>
Posted 2 mins ago
<span> - Deadline: <i>1-1-2023</i></span>
</div>
                </Col>
            </Row>
       


</div>


<div className='job-card'>
            <Row>
                <Col md={2} >
                <img className='job-profile' src={user}  alt="dp" />
                </Col>
                <Col md={8} className='job-detail'>
                <h6>Tesla</h6>
                    <h5>Lorem ipsum</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              
                </Col>
                <Col md={2} className='job-level'>
                <Row>
                <p>Applied</p>
                <p>Check Email</p>
                </Row>
               
    
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div className='job-posted'>
Posted 2 mins ago
<span> - Deadline: <i>1-1-2023</i></span>
</div>
                </Col>
            </Row>
       


</div>
<div className='job-card'>
            <Row>
                <Col md={2} >
                <img className='job-profile' src={user}  alt="dp" />
                </Col>
                <Col md={8} className='job-detail'>
                <h6>Tesla</h6>
                    <h5>Lorem ipsum</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              
                </Col>
                <Col md={2} className='job-level'>
                <Row>
                <p>Applied</p>
                <p>Waiting for Result</p>
                </Row>
               
    
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div className='job-posted'>
Posted 2 mins ago
<span> - Deadline: <i>1-1-2023</i></span>
</div>
                </Col>
            </Row>
       


</div>


        
        <button className='job-more'>More List</button>
    </section>
   
    </>
  )
}

export default Applied
