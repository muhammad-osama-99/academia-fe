import React from "react";
import { Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

import { CommonInput } from "../../../components/authForm/commonInput";
import "./../../../../src/auth/auth.css"
import * as Yup from "yup";
import Header from "../../../components/dashboardHeader/Header";


function NewUser() {
    return (
      <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
        <Formik
            initialValues={{
                name: "",
                emailAddress: "",
                password: "",
                roles: "",

            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Name Required")
                    .matches(
                        /^[aA-zZ\s]+$/,
                        "Only alphabets allowed for this field "
                    ),
                emailAddress: Yup.string()
                    .email("Invalid email address")
                    .required("Email required"),
                role: Yup.string().required("Account type required"),
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
      

      
      
                        
                        
                      
                            <Form id="signup-form">
                            <div className="formInput">
                                <Row >
                                    <Col md={12}>
                                        <CommonInput
                                            id="name"
                                            label="Name"
                                            fieldRequired="*"
                                            name="name"
                                            className='inputtype'
                                            type="text"
                                            placeholder="Enter your name" />
                                    </Col>
                                    
                                </Row>
                            </div>
                              <div className="formInput">
                                <Row >
                                    <Col md={12}>
                                        <CommonInput
                                            label="Email Address"
                                            fieldRequired="*"
                                            name="emailAddress"
                                            type="email"
                                            className='inputtype'
                                            placeholder="someone@example.com" />
                                    </Col>
                                   
                                </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col>
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>Are You Organization or User?<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="organization" className="radio-css"/>
              Organization
            </label>
            <label>
              <Field type="radio" name="picked" value="user" className="radio-css"/>
              User
            </label>
            
          </div>
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col>
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>Organization?<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="roles" value="industrial" className="radio-css"/>
              Industrial
            </label>
            <label>
              <Field type="radio" name="roles" value="academic" className="radio-css" />
              Academic
            </label>
            
          </div>
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col>
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>User?<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="roles" value="student" className="radio-css" />
              Student
            </label>
            <label>
              <Field type="radio" name="roles" value="faculty" className="radio-css" />
              Faculty
            </label>
            
          </div>
                                </Col>
                              </Row>
                              </div>


                                <div className="formInput">
                                <Row >
                                    <Col md={12}>
                                        <CommonInput
                                            label="Password"
                                            className='inputtype'
                                            fieldRequired="*"
                                            name="password"
                                            type="password"
                                            id="password"
                                            placeholder="Enter Password" />
                                    </Col>
                                    </Row>
                                  </div>
                                    <div className="formInput">
                                      <Row>
                                    <Col md={12}>
                                        <CommonInput
                                            label="Confirm Password"
                                            fieldRequired="*"
                                            name="confirmPassword"
                                            type="password"
                                            id="cf_password"
                                            className='inputtype'
                                            placeholder="Re-enter Password" />
                                    </Col>
                                    </Row>
                                    </div>
                               
                                <Row className="">
                                    <Col sm={12} className="text-center">
                                        <button className=" text-light form-btn fw-bold btn waves-light btn-medium " type="submit" style={{backgroundColor:"#6D70C6"}}>Create New User</button>
                                    </Col>
                                </Row>
                            
                            </Form>

       
                           
                    
              
              
                </>
            )
            }
        </Formik >
        </Box>
    );
}

export default NewUser;
