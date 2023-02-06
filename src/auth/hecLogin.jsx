import React from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form} from "formik";

import { CommonInput } from "../components/authForm/commonInput";
import "./auth.css"
import * as Yup from "yup";


function HECLogin() {
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
      <h3 className="headingsacademic">HEC Login</h3>
    </div>
    </nav>
    <div className='container-1'>
      
      <div className="card login-card input-field">
                        
                        <h2 className="signinheading">Sign in</h2>
                      
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
                                    
                               
                                <Row className="">
                                    <Col sm={12} className="text-center">
                                        <button className=" text-light form-btn fw-bold btn waves-light btn-medium " type="submit" style={{backgroundColor:"#6D70C6"}}>Sign In</button>
                                    </Col>
                                </Row>
                            
                            </Form>
                           
       
                            </div>
                    
               </div>
              
                </>
            )
            }
        </Formik >
    );
}

export default HECLogin;
