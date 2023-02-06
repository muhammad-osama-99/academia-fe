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


function UploadOpportunities() {
    const modules = {toolbar : {containerQuill}}
    return (
      <Box m="20px">
      <Header title="CREATE OPPORTUNITIES" subtitle="Create a New Opportunity Post" />
        <Formik
            initialValues={{
                title: "",
                description: "",
                qualification: "",
                enforceQualification: "no",
                experience:"",
                enforceExperience:"no",
                duration:"",
                lastDate:"",
                keywords:"",
                city:"",
                type:"",
                expertise:"",
                enforceExpertise:"no",
                targetAudience:"",
                skillSets:"",
                postedDate:new Date().toISOString(),

                //Consultant
                cost:"",

                //Interns
                vacancy:"",
                stipend:"",
                for:"",

                //job
                nature:"",
                engagement:"",
                salary:"",
                vacancyJob:"",

            }}
            validationSchema={Yup.object({
                title: Yup.string().required("Title is required"),
                description: Yup.string().required("Description is required"),
                qualification: Yup.string().when("enforceQualification", {
                  is: "yes",
                  then: Yup.string().required("Qualification is required"),
                }),
                enforceQualification: Yup.string().oneOf(["yes", "no"]).default("no"),
                experience: Yup.string().when("enforceExperience", {
                  is: "yes",
                  then: Yup.string().required("Experience is required"),
                }),
                enforceExperience: Yup.string().oneOf(["yes", "no"]).default("no"),
                duration: Yup.string(),
                lastDate: Yup.date().required("Last date is required"),
                keywords: Yup.string(),
                city: Yup.string(),
                type:  Yup.mixed().oneOf(["Interns", "Jobs", "Consultant"]).default("Jobs"),
                expertise: Yup.string().when("enforceExpertise", {
                  is: "yes",
                  then: Yup.string().required("Expertise is required"),
                }),
                enforceExpertise: Yup.string().oneOf(["yes", "no"]).default("no"),
                targetAudience: Yup.mixed().oneOf(["Both", "Academic", "Industrial"]).default("Both"),
                skillSets: Yup.string(),
                postedDate: Yup.date(),
                cost: Yup.number().when("type", {
                  is: "Consultant",
                  then: Yup.number(),
                }),
                vacancy: Yup.number().when("type", {
                  is: "Interns",
                  then: Yup.number(),
                }),
                stipend: Yup.number().when("type", {
                  is: "Interns",
                  then: Yup.number(),
                }),
                for: Yup.mixed().oneOf(["Both", "Students", "Faculty"]).default("Both"),
                nature: Yup.string().when("type", {
                  is: "Job",
                  then:  Yup.string().oneOf(["temporary", "permanent"]).default("temporary"),
                }),
                engagement: Yup.string().when("type", {
                  is: "Job",
                  then: Yup.string().required("Engagement is required"),
                }),
                salary: Yup.number().when("type", {
                  is: "Job",
                  then: Yup.number(),
                }),
                vacancyJob: Yup.number().when("type", {
                  is: "Job",
                  then: Yup.number(),
                }),
                
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
                                <DegreeSelect
                                            id="qualification"
                                            label="Qualification"
                                            
                                            name="Qualification"
                                            className='inputtype name-id'
                                            type="select"
                                            placeholder="Enter Qualification" />
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                              <Col
        md={10}
        className="  d-flex justify-content-between"
      >
        <fm.Label style={{ fontWeight: "500" }}>
          Enforce Qualification
        </fm.Label>
        <fm.Check type="switch"  id="custom-switch" />
      </Col>
                              </Row>
                              </div>
                           


                             



                              <div className="formInput">
                              


                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="experience"
                                            label="Total Experience"
                                            
                                            name="Experience"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Experience in years" />
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                              <Col
        md={10}
        className="  d-flex justify-content-between"
      >
        <fm.Label style={{ fontWeight: "500" }}>
          Enforce Experience
        </fm.Label>
        <fm.Check type="switch"  id="custom-switch" />
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
                              <Col
        md={10}
        className="  d-flex justify-content-between"
      >
        <fm.Label style={{ fontWeight: "500" }}>
          Enforce Experties
        </fm.Label>
        <fm.Check type="switch"  id="custom-switch" />
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
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>Opportunity Type<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="Jobs" className="radio-css"/>
              Job
            </label>
            <label>
              <Field type="radio" name="picked" value="Interns" className="radio-css"/>
              Intern
            </label>
            <label>
              <Field type="radio" name="picked" value="Consultant" className="radio-css"/>
              Consultant
            </label>
            
          </div>
                                </Col>
                              </Row>
                              </div>
                              



                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="cost"
                                            label="Cost"
                                            
                                            name="cost"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Cost" />
                                </Col>
                              </Row>
                              </div>



                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="vacancy"
                                            label="Vacancy"
                                            
                                            name="vacancy"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Vacancy" />
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="stipend"
                                            label="Stipend"
                                            
                                            name="stipend"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter stipend in Rupees" />
                                </Col>
                              </Row>
                              </div>


                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>For?<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="pickedd" value="Both" className="radio-css"/>
              Both
            </label>
            <label>
              <Field type="radio" name="pickedd" value="Students" className="radio-css"/>
              Students
            </label>
            <label>
              <Field type="radio" name="pickedd" value="Faculty" className="radio-css"/>
              Faculty
            </label>
            
          </div>
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <div id="my-radio-group" className='inputtype ' ><label  style={{ fontWeight: "500" }}>Nature<b className="error">*</b></label></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="naturepicked" value="Temporary" className="radio-css"/>
              Temporary
            </label>
            <label>
              <Field type="radio" name="naturepicked" value="Permanent" className="radio-css"/>
              Permanent
            </label>
          
            
          </div>
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <EngagementSelect
                                            id="engagement"
                                            label="Engagement"
                                            fieldRequired="*"
                                            name="engagement"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Engagement" />
                                </Col>
                              </Row>
                              
                              </div>


                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="salary"
                                            label="Salary"
                                            
                                            name="salary"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Salary" />
                                </Col>
                              </Row>
                              </div>
                              <div className="formInput">
                              <Row>
                                <Col md={10}>
                                <CommonInput
                                            id="vacancy"
                                            label="Vacancy"
                                            
                                            name="vacancy"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Vacancy" />
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
export default UploadOpportunities;
