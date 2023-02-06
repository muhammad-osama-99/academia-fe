import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css"
const Index = () => {
  return (
   <>
 
<Container className="my-5">
      <Row className='mx-auto'>
        <Col md={5} className="pt-5 pb-5 pl-2 pr-2 mb-3 bg-white text-center rc-11 br mx-auto">
            <div className="logintag text-light"><h2>Create Account</h2>
            </div>
            <button className="loginbuttontag bg-light"><Link to="/register" style={{color:'#000',textDecoration:'none'}}>Register</Link></button>
        </Col>

        <Col md={5}  className="br pt-5 pb-5 pl-2 pr-2 mb-3 text-center bg-white mx-auto  rc-12">
         
                <div className="logintag text-light"><h2>Industrial</h2>
               </div>
               <button className="loginbuttontag bg-light"><Link to="/login/industrial" style={{color:'#000',textDecoration:'none'}}>Sign In</Link></button> 
        </Col>
      </Row>

        <Row className='mx-auto'>
        <Col md={5} className="pt-5 pb-5 pl-2 pr-2 mb-3 bg-white text-center mx-auto  rc-21 br">
                <div className="logintag text-light "><h2>Academic</h2>
               </div>
               <button className="loginbuttontag bg-light"><Link to="/login/academic" style={{color:'#000',textDecoration:'none'}}>Sign In</Link></button>
        </Col>

        <Col md={5}  className="pt-5 pb-5 pl-2 pr-2 mb-3 text-center mx-auto bg-white rc-22 br">
            <div className="logintag text-light"><h2>HEC</h2>
            </div>
            <button className="loginbuttontag bg-light"><Link to="/login/hec" style={{color:'#000',textDecoration:'none'}}>Sign In</Link></button>
        </Col>
      </Row>
</Container>
   </>
  )
}

export default Index