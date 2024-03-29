import React from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { CommonInput } from "../components/authForm/commonInput";
import "./auth.css"
import * as Yup from "yup";


function ForgetPassword() {
    return (
        <Formik
            initialValues={{
               
                emailAddress: "",
               
            }}
            validationSchema={Yup.object({
               
                emailAddress: Yup.string()
                    .email("Invalid email address")
                    .required("Email required"),

               
              
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
     
   
     <div className='container-1' style={{marginTop:"120px" }}>
      
      <div className="card login-card input-field">
                        
                        <h2 className="signinheading">Forget Your Password?</h2>
                      
                            <Form id="signup-form">
                           
                              <div className="formInput">
                                <Row >
                                    <Col md={12}>
                                        <CommonInput
                                            label="Email your Email Address"
                                           
                                            name="emailAddress"
                                            type="email"
                                            className='inputtype'
                                            placeholder="someone@example.com" />
                                    </Col>
                                   
                                </Row>
                              </div>
                              
                            


                                
                                    
                               
                                <Row className="">
                                    <Col sm={12} className="text-center">
                                        <button className=" text-light form-btn fw-bold btn waves-light btn-medium " type="submit" style={{backgroundColor:"#6D70C6"}}>Verify your email</button>
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

export default ForgetPassword;
