import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";

import user from "../../../../src/assets/user.png"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../../data/mockData";
import Header from "../../../components/dashboardHeader/Header";
import Table from 'react-bootstrap/Table';

const DetailView = () => {
  

  

  return (
    
    <div className="formInput">
        <Row>
        <Col>
        <h3>
          <strong>Post Title</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
        <Col >
          <i><span>Posted:  12-12-2020</span></i>
        </Col>
       </Row>
        <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Name of Organization</th>
          <td>NTS </td>
          
        </tr>
      </thead>
      <tbody>
      <tr>
          
          <th>Qualification</th>
          <td>BS</td>
          
        </tr>
        
        <tr>
          
          <th>Total Vacancies: </th>
          <td>15</td>
          
        </tr>
        <tr>
          
          <th>Type: </th>
          <td>Job</td>
          
        </tr>
        <tr>
          
          <th>Experience: </th>
          <td>15 years</td>
          
        </tr>
        <tr>
          
          <th>Duration </th>
          <td>1 year</td>
          
        </tr>
        <tr>
          
          <th>Job Location </th>
          <td>Islamabad</td>
          
        </tr>
        <tr>
          
          <th>Last Date To Apply </th>
          <td>01-01-2022</td>
          
        </tr>
      </tbody>
    </Table>


    <Row>
        <Col>
        <h3>
          <strong>Description</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
        <Col md={10}>
            <p>
            Information and Communications Technology (ICT) has been integrated in education and student are gaining many skills. In this era Academia and Industry should have an online platform where they can interact with each other. In this emerging technological world, both the users have a need for a web service where they can engage and can have a discussion with each other which will allow them to save their time and energy. It is very difficult for both industry and students to keep a track of work from different resources rather they get the opportunity to have it all available on one website. This website provides both the Industry and Academia, ability to use it in a respective manner.
            </p>
        </Col>
       </Row>



       <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Cost</th>
          <td>12000 </td>
          
        </tr>
      </thead>
      <tbody>
      <tr>
          
          <th>Stipend/Salary</th>
          <td>12000</td>
          
        </tr>
        
        <tr>
          
          <th>Nature </th>
          <td>Permanent</td>
          
        </tr>
        <tr>
          
          <th>Engagement: </th>
          <td>Part Time</td>
          
        </tr>
        <tr>
          
          <th>Apply: </th>
          <td>Apply Online</td>
          
        </tr>
        
      </tbody>
    </Table>
       <Row>
       <Col style={{marginLeft:"20px"}} className='job-level'>
                <Row>
                <button className='label-a' >Skillset</button>
                
                <button className='label-a'>Skillset</button>
                <button className='label-a'>Skillset</button>
                <button className='label-b'>Expertise</button>
                <button className='label-b'>Expertise</button>

                <button className='label-b'>Expertise</button>

                </Row>
               
    
                </Col>
       </Row>
      <br></br>
      <br></br> <br></br> <br></br>
      
        </div>
      );
};

export default DetailView;
