import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "./profile.css";
import user from "../../../../src/assets/user.png"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../../data/mockData";
import Header from "../../../components/dashboardHeader/Header";


const ViewOwnProfile = () => {
  

  

  return (
    <Box m="20px" >
     
     
       <Row>
       <Col  md={6} style={{textAlign:"center"}} >
                               
                                   <img className="logodp align-cv" src={user} alt="dp" />
                             
                                </Col>  
        <Col md={6} >
            <Row>

                <Col>
                <div className="name-cv">
        <h4>Muhammad Osama</h4>
        </div>
                </Col>
            </Row>
            <Row>

<Col>
<div className="name-cv">
<p>Ph #: 03012969742  Email: muhammadosama699@gmail.com</p>

</div>
</Col>


</Row>
       
        </Col>
        
       </Row>



       <Row>
        <Col>
        <h3>
          <strong> <u>Description</u></strong> 
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
          <strong> <u>Organization Detail</u></strong> 
        </h3>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>NTN #: </h6>
        </Col>
        <Col>
            <p>555-555-555 </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>CEO Name: </h6>
        </Col>
        <Col>
            <p>Muhammad Osama </p>
        </Col>
       </Row>
       <Row>
        <Col >
            <h6>Type: </h6>
        </Col>
        <Col>
            <p>Academic </p>
        </Col>
       </Row>
      
       
       <Row >
        <Col >
            <h6>Expertise: </h6>
        </Col>
        <Col >
            <p>Software </p>
        </Col>
       </Row>
       
       <Row>
        <Col >
            <h6>Founded Date: </h6>
        </Col>
        <Col>
            <p>12-12-2005 </p>
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
       <Row  >
        <Col >
            <h6>Whatsapp: </h6>
        </Col>
        <Col>
            <p>0301-2345678 </p>
        </Col>
       </Row>
       <Row >
        <Col style={{marginBottom:"80px"}}>
            <h6>URL: </h6>
        </Col>
        <Col >
            <p>https://www.academic.com</p>
        </Col>
       </Row>
    </Box>
  );
};

export default ViewOwnProfile;
