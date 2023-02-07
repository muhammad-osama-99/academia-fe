import React from 'react'
import "../myPosts/posts.css"
import "../../../auth/auth.css"

import user from "../../../../src/assets/user.png"
import { Row, Col } from "react-bootstrap";

const ViewProject = () => {
  return (
    <>
    <div className="search-wrapper">
        <div className='search-box'>
            <div className='search-card'>
                <input className='search-input' type="text"
                placeholder='Job TITLE OR KEYWORDS'/>
                <button className='search-button'>Search</button>
            </div>
        </div>
      
    </div>
    <div className='filter-box'>
        <div className='filter-dropdown'>
            <select className='filter-select' id='job-level'
            name="job-level">
                <option>Job City</option>
                <option>Lahore</option>
                <option>Islamabad</option>
            </select>
            <select className='filter-select' id="job-function" name="job-function">
                <option>Job Function</option>
                <option>IT</option>
                <option>Manager</option>
            </select>
            <select className='filter-select' id="employment" name="employment">
                <option>Job Function</option>
                <option>Part Time</option>
                <option>Full Time</option>
            </select>

        </div>
<div className='filter-chosen'>
    <div className='chosen-card'>
        Remote<i className='fas fa-times-circle'></i>
    </div>
    <div className='chosen-card'>
        Full Time<i className='fas fa-times-circle'></i>
    </div>
    <div className='chosen-card'>
        Financial Touch<i className='fas fa-times-circle'></i>
    </div>

</div>
    </div>

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
                <Col md={2} >
                
                <div className='job-posted flexwrap-flex'>
                  <Row><p>Collaborated</p></Row>
                  <Row>Posted 2 mins ago</Row>
                <Row>Deadline: 1-1-2023</Row>

</div>

                </Col>
            </Row>
            <Row>
                <Col md={12} className='job-level'>
                <button className='label-a'>View Details</button>
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
                <Col md={2} >
                
                <div className='job-posted flexwrap-flex'>
                  <Row><p>Open Collaboration</p></Row>
                  <Row>Posted 2 mins ago</Row>
                <Row>Deadline: 1-1-2023</Row>

</div>

                </Col>
            </Row>
            <Row>
                <Col md={12} className='job-level'>
                <button className='label-a'>View Details</button>
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
                <Col md={2} >
                
                <div className='job-posted flexwrap-flex'>
                  <Row><p>Funding</p></Row>
                  <Row>Posted 2 mins ago</Row>
                <Row>Deadline: 1-1-2023</Row>

</div>

                </Col>
            </Row>
            <Row>
                <Col md={12} className='job-level'>
                <button className='label-a'>View Details</button>
                </Col>
            </Row>


</div>


        
        <button className='job-more'>More List</button>
    </section>
   
    </>
  )
}

export default ViewProject
