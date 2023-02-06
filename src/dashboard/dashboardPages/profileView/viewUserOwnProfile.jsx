import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "./profile.css";
import user from "../../../../src/assets/user.png"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../../data/mockData";
import Header from "../../../components/dashboardHeader/Header";


const ViewUserOwnProfile = () => {
  

  

  return (
    <Box m="20px" >
     
     
       <Row>
      
        <Col md={6} >
            <Row>

                <Col>
                <div>
        <h4>MUHAMMAD OSAMA</h4>
        </div>
                </Col>
            </Row>
            <Row>

<Col>
<div >
<p> Ph #: 03012969742 | Email: muhammadosama699@gmail.com</p>

</div>
</Col>


</Row>
       
        </Col>
        <Col  md={6} style={{textAlign:"center"}} >
                               
                               <img className="logodp align-cv" src={user} alt="dp" />
                         
                            </Col>  
        
       </Row>



       <Row>
        <Col>
        <h3>
          <strong>PROFESSIONAL SUMMARY</strong> <hr className="hr-style"></hr>
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
       <Row>
        <Col>
        <h3>
          <strong>PERSONAL INFORMATION</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>Father Name: </h6>
        </Col>
        <Col>
            <p>Khushi Muhammad </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>CNIC: </h6>
        </Col>
        <Col>
            <p>42501-1234567-9 </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>Gender: </h6>
        </Col>
        <Col>
            <p>Male </p>
        </Col>
       </Row>
      
       
       <Row >
        <Col >
            <h6>Maritial: </h6>
        </Col>
        <Col >
            <p>Single </p>
        </Col>
       </Row>
       
       <Row>
        <Col >
            <h6>Date of Birth: </h6>
        </Col>
        <Col>
            <p>01-01-2000 </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>Address: </h6>
        </Col>
        <Col>
            <p>CPO 6/13 MR-III E8 </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>City: </h6>
        </Col>
        <Col>
            <p>Islamabad </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>Province: </h6>
        </Col>
        <Col>
            <p>Federal </p>
        </Col>
       </Row>
       <Row>
        <Col>
        <h3>
          <strong>SKILL & EXPERTISE</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
      
       <Row>
        
        <Col>
            <p>Federal </p>
        </Col>
        <Col>
            <p>Federal </p>
        </Col>
        <Col>
            <p>Federal </p>
        </Col>
       </Row>
       <Row>
        <Col>
        <h3>
          <strong>QUALIFICATION</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
       
       <Col>
           <p>Bahria University </p>
       </Col>
       <Col>
           <p>BS</p>
       </Col>
       <Col>
           <p>Computer Science</p>
       </Col>
       <Col>
           <p>
               3.49
           </p>
       </Col>
       <Col>
           <p>
              2020
           </p>
       </Col>
      </Row>


      <Row>
        <Col>
        <h3>
          <strong>Publication</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
       <Col>
           <p>
              Publication title
           </p>
       </Col>
       <Col>
           <p>
              Publication type
           </p>
       </Col>
       <Col>
           <p>786-053 </p>
       </Col>
       <Col>
           <p>M. Adil</p>
       </Col>
       <Col>
           <p>2019</p>
       </Col>
       <Col>
           <p>
               Impact Factor
           </p>
       </Col>
       
      </Row>



      <Row>
        <Col>
        <h3>
          <strong>Research Project</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
       <Col>
           <p>
              Research title
           </p>
       </Col>
       <Col>
           <p>
              Role
           </p>
       </Col>
       <Col>
           <p>Donor</p>
       </Col>
       <Col>
           <p>2016-2018</p>
       </Col>
       <Col>
           <p>12 lakh</p>
       </Col>
       
       
      </Row>


      <Row>
        <Col>
        <h3>
          <strong>EXPERIENCE</strong> <hr className="hr-style"></hr>
        </h3>
        </Col>
       </Row>
       <Row>
       <Col>
           <p>
              Capital Lab
           </p>
       </Col>
       <Col>
           <p>
              2018-Present
           </p>
       </Col>
       <Col>
           <p>Department</p>
       </Col>
       <Col>
           <p>7 yrs</p>
       </Col>
       <Col style={{marginBottom:"80px"}}>
           <p>Pakistan</p>
       </Col>
       
       
      </Row>

    </Box>
  );
};

export default ViewUserOwnProfile;
