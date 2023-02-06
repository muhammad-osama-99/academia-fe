import React from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form} from "formik";
import {Link} from 'react-router-dom'
import { CommonInput } from "../components/authForm/commonInput";
import "./auth.css"
import * as Yup from "yup";


function AcademicLogin() {
    return (
        <Formik
            initialValues={{
               
                emailAddress: "",
                password: "",
                

            }}
            validationSchema={Yup.object({
               
                emailAddress: Yup.string()
                    .email("Invalid email address")
                    .required("Email required"),
              
                password: Yup.string()
                    .required("Password required")
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/,
                        "Must contain 5 characters, atleast one uppercase and one numeric"
                    ),
                
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ errors, touched, setFieldValue }) => (
              <>
        <nav className="headingsignin">
    <div className="nav-wrapper ">
      <h3 className="headingsacademic">Academic Login</h3>
    </div>
    </nav>
    <div className='container-1'>
      
      <div className="card login-card input-field">
                        
                        <h2 className="signinheading">Sign In</h2>
                      
                            <Form id="signup-form">
                           
                              <div className="formInput">
                                <Row >
                                    <Col md={12}>
                                        <CommonInput
                                            label="Email Address"
                                           
                                            name="emailAddress"
                                            type="email"
                                            className='inputtype'
                                            placeholder="someone@example.com" />
                                    </Col>
                                   
                                </Row>
                              </div>
                             


                                <div className="formInput">
                                <Row >
                                    <Col md={12}>
                                        <CommonInput
                                            label="Password"
                                            className='inputtype'
                                            
                                            name="password"
                                            type="password"
                                            id="password"
                                            placeholder="Enter Password" />
                                    </Col>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col>
                                    <Link to="/forget_password" className='forgettag' style={{color:'#235291'}}>Forget Password?</Link>
                                    </Col>
                                  </Row>
                                 
                               
                                <Row className="">
                                    <Col sm={12} className="text-center">
                                        <button className=" text-light form-btn fw-bold btn waves-light btn-medium " type="submit" style={{backgroundColor:"#6D70C6"}}>Sign In</button>
                                    </Col>
                                </Row>
                            
                            </Form>
                            <Row className="text-light">
                                    <Col className="text-center ">                  
                                <button className="btn-newaccount btn waves-light btn-medium mbl text-light" style={{backgroundColor:"#21AA93"}}>
                                  <Link to="/register" className="text-light">Create New Account</Link>
                                  </button>
                                      </Col>
                                </Row>
       
                            </div>
                    
               </div>
              
                </>
            )
            }
        </Formik >
    );
}

export default AcademicLogin;
