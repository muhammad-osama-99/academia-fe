import React from "react";
import { Box } from "@mui/material";
import { Row, Col, Form as fm} from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { CommonInput } from "../../../components/authForm/commonInput";
import "./../../../../src/auth/auth.css"
import * as Yup from "yup";
import Header from "../../../components/dashboardHeader/Header";
import { DegreeSelect } from "../../../components/authForm/commonTextDegree";
import { CitySelect } from "../../../components/authForm/commonTextarea";
import { AudienceSelect } from "../../../components/authForm/commonTextAudience";
import { EngagementSelect } from "../../../components/authForm/commonEngagement";


function UploadIdeas() {
    const modules = {toolbar : {containerQuill}}
    return (
      <Box m="20px">
      <Header title="CREATE Project" subtitle="Create a New Collaboration Post" />
        <Formik
            initialValues={{
                againstPostID:"",
                message:"",
                title: "",
                description: "",
                
               
                duration:"",
                lastDate:"",
                keywords:"",
                
                typePost:"",
                expertise:"",
                
                targetAudience:"",
                skillSets:"",
                postedDate:new Date().toISOString(),

amount:"",
source:"",
fundingDuration:"",

            }}
            validationSchema={Yup.object({
                againstPostID: Yup.string(),
                title: Yup.string().required("Title is required"),
                description: Yup.string().required("Description is required"),
                
                duration: Yup.string(),
                lastDate: Yup.date().required("Last date is required"),
                keywords: Yup.string(),
                
                typePost:  Yup.mixed().oneOf(["To Collaborate", "Collaborated", "Funding"]).default("To Collaborate"),
                expertise: Yup.string(),
              
                
                targetAudience: Yup.mixed().oneOf(["Both", "Academic", "Industrial"]).default("Both"),
                skillSets: Yup.string(),
                postedDate: Yup.date(),
                
                amount: Yup.number().positive(),
                source: Yup.string(),
                fundingDuration: Yup.string()
             
                
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
      

      
      
                        
                        
                      
                            <Form >
                                
                            <div className="formInput">
                                <Row >
                                    <Col md={10}>
                                        <CommonInput
                                            id="againstPostID"
                                            label="Against Post Reply"
                                            
                                            name="againstPostID"
                                            className='inputtype'
                                            type="text"
                                            placeholder="Search Post" />
                                            
                                    </Col>
                                    
                                </Row>
                            </div>
                            <div className="formInput">
                                <Row >
                                    <Col md={10}>
                                        <CommonInput
                                            id="title"
                                            label="Title"
                                            fieldRequired="*"
                                            name="title"
                                            className='inputtype'
                                            type="text"
                                            placeholder="Enter Title" />
                                            
                                    </Col>
                                    
                                </Row>
                            </div>
                              <div className="formInput">
                                <Row>
                                    <Col>
                                    <label >Description<span className="error">*</span></label>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={10}>
                                        
                                    <ReactQuill 
                                     id="description"
                                     fieldRequired
                                     required
                                     name="description"
                                    className='inputtype'
                                   
        theme="snow"
        modules={modules}
        placeholder="Write somethings..."
      />
                                            
                                    </Col>
                                   
                                </Row>
                              </div>
                              
                              
                              <div className="formInput">
                              


                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="duration"
                                            label="Duration"
                                            
                                            name="Duration"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Duration in Years" />
                                </Col>
                              </Row>
                              
                              </div>

                            

                              <div className="formInput">
                              


                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="expertise"
                                            label="Expertise"
                                            
                                            name="Expertise"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Expertise" />
                                </Col>
                              </Row>
                              
                              </div>
                            
                               


                              <div className="formInput">
                              


                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="keywords"
                                            label="Keywords"
                                            
                                            name="keywords"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Keywords" />
                                </Col>
                              </Row>
                              
                              </div>
                              <div className="formInput">
                              


                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="skillsets"
                                            label="Skillsets"
                                            
                                            name="Skillsets"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Skillsets" />
                                </Col>
                              </Row>
                              
                              </div>



          
                              <div className="formInput">
                              


                              <Row>

                              <Col md={10}>
                                        <CommonInput
                                            id="lastDate"
                                            label="Deadline"
                                            fieldRequired="*"
                                            name="lastDate"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Last Date" />
                                    </Col>
                                    </Row>
                                    </div>
                                    <div className="formInput">
                              


                              <Row>
                                    <Col md={10}>
                                        <CitySelect
                                            id="name"
                                            label="City"
                                            
                                            name="city"
                                            className='inputtype name-id'
                                            type="text"
                                        
                                            
                                            placeholder="Enter City Name" />
                                    </Col>
                                    </Row>
                                    </div>
                                   



                                    <div className="formInput">
                              


                              <Row>
                                <Col md={10}>
                                <AudienceSelect
                                            id="audienceTarget"
                                            label="Audience Target"
                                            fieldRequired="*"
                                            name="audienceTarget"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter audienceTarget" />
                                </Col>
                              </Row>
                              
                              </div>


                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>Post Type<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="To Collaboration" className="radio-css"/>
              To Collaboration
            </label>
            <label>
              <Field type="radio" name="picked" value="Collaborated" className="radio-css"/>
              Collaborated
            </label>
            <label>
              <Field type="radio" name="picked" value="Funding" className="radio-css"/>
              Funding
            </label>
            
          </div>
                                </Col>
                              </Row>
                              </div>
                              



                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="amount"
                                            label="Amount"
                                            
                                            name="amount"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Amount" />
                                </Col>
                              </Row>
                              </div>



                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="sourceName"
                                            label="Source"
                                            
                                            name="source"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Source Name" />
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="fundingDuration"
                                            label="Funding Duration"
                                            
                                            name="fundingDuration"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Duration" />
                                </Col>
                              </Row>
                              </div>


                             


                             
                                <Row >
                                    <Col md={10} className="text-center" style={{paddingBottom:"80px"}}>
                                        <button className=" text-light form-btn fw-bold btn waves-light btn-medium " type="submit" style={{backgroundColor:"#6D70C6"}}>Upload Post</button>
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
let containerQuill =[

   
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean','link','image','video']                                         // remove formatting button
      
    
    ]
export default UploadIdeas;
