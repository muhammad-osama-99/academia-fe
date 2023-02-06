import React from "react";
import { Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import {Link} from 'react-router-dom'
import { CommonInput } from "../components/authForm/commonInput";
import "./auth.css"
import user from "../../src/assets/user.png"
import * as Yup from "yup";
import { CitySelect } from "../components/authForm/commonTextarea";
import { ProvinceSelect } from "../components/authForm/commonTextProvince";


function OrganizationInformation() {
    return (
        <Formik
            initialValues={{
                name:'',
                role: '',
                description: '',
                NTN: '',
                organizationType: '',
                url: '',
                foundedDate: '',
                city: '',
                address:'',
                province: '',
                whatsapp: '',
                CEOName: '',
                expertise: '',
                phone: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Name Required")
                    .matches(
                        /^[aA-zZ\s]+$/,
                        "Only alphabets allowed for this field "
                    ),
               
            role: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            NTN: Yup.string().required("Required"),
            organizationType: Yup.string().required("Required"),
            url: Yup.string().url("Invalid URL"),
            foundedDate: Yup.date().required("Required"),
            city: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            province: Yup.string().required("Required"),
            whatsapp: Yup.string().matches(/^[0-9]+$/, 'Invalid Whatsapp number format'),
            CEOName: Yup.string(),
            expertise: Yup.string().required("Required"),
            phone: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Invalid phone number format'),

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
      <h3 className="headingsacademic">Account Information</h3>
    </div>
    </nav>
    <div className='required-note'>
                    <div className='required-note-line'>
                        <p className='note-line-text'>Note! (*) asterix sign form are mendatory.</p>
                    </div>
    </div>

    
      
      
                    
                      
                            <Form id="organization-information-form">
                            <div className='required-note-line note-margin'>
                            <Row>
                                <Col>
                                    <h4 >Organization Information</h4>
                                </Col>  
                            </Row>

                            <Row >
                            <div className='logo-update'>
                                <Col >
                                <div className='company-logo'>
                                   <img className='logodp' src={user} alt="dp" />
                               </div>
                                </Col>  
                            
                               
                                <Col>
                                <div className='company-logo-name'>
                                <Row>
                                <Col>
                                       <p>Muhammad Osama</p>   
                               </Col>
                               </Row>
                               </div>
                               <div className='company-logo-change'>
                               <Row>
                                <Col>
                                       <p >Change logo</p>
                                </Col>
                               </Row>
                               </div>
                                </Col>
                      
                       </div>
                       
                            </Row>

                            <Row>
                                <Col>
                                    <h5>Account Information</h5>
                                </Col>  
                            </Row>
                            <Row>
                            <div className='account-option-select-row'>
                                <Col>
                                
                                <div className='account-option-select-row-2'>
                                    <div className='radio-select'>
                                    
          <div role="group" aria-labelledby="my-radio-group">
          <Field type="radio" name="picked" value="education" className="radio-css"/>
            <label>
            
             <strong><p className="p-row-1">Educational Account</p></strong> 
            <p className="p-row">A education organization account</p>
            </label>

          </div>
                                    </div>

                            </div>
                                
                                </Col>

                                <Col>
                                
                                <div className='account-option-select-row-2'>
                                    <div className='radio-select'>
                                    
                                    <div role="group" aria-labelledby="my-radio-group">
                                    <Field type="radio" name="picked" value="industrial" className="radio-css"/>
                                        <label>
                                        
                                        <strong>  <p className="p-row-1">Industrial Account</p></strong> 
                                        <p className="p-row">A industrial organization account</p>
                                        </label>
                                    </div>
                                    </div>
                            </div>               
                                </Col>
                                </div>
                            </Row>
                           

<Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Organization Name"
                                            fieldRequired="*"
                                            name="name"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Organization Name" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Oganization Type"
                                            fieldRequired="*"
                                            name="organizationType"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Organization Type" />
                                    </Col>

</Row>


<Row>
                                    <Col md={8}>
                                        <CommonInput
                                        
                                            id="name"
                                            label="Description"
                                            fieldRequired="*"
                                            name="description"
                                            as="textarea"
                                            className='inputtype name-id'
                                            type="textarea"
                                           rows={3}
                                            placeholder="About Organization" />
                                    </Col>
                                   

</Row>

<Row>
                                <Col>
                                    <h5 style={{marginTop:"7px"}}>Organization Detail</h5>
                                </Col>  
                            </Row>

                            <Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="CEO Name"
                                            name="CEOName"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Name" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="NTN #"
                                            fieldRequired="*"
                                            name="organizationType"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter NTN #" />
                                    </Col>

</Row>
<Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Joined Date"
                                            name="foundedDate"
                                            fieldRequired="*"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Date" />
                                    </Col>

</Row>
<Row>
                                <Col>
                                    <h5 style={{marginTop:"7px"}}>Physical Address</h5>
                                </Col>  
                            </Row>

                            <Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Address"
                                            name="address"
                                            fieldRequired="*"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Address" />
                                    </Col>
                                    <Col md={6}>
                                        <CitySelect
                                            id="name"
                                            label="City"
                                            fieldRequired="*"
                                            name="city"
                                            className='inputtype name-id'
                                            type="text"
                                        
                                            
                                            placeholder="Enter City Name" />
                                    </Col>

</Row>
<Row>
                                    <Col md={6}>
                                        <ProvinceSelect
                                            id="name"
                                            label="Province"
                                            name="province"
                                            fieldRequired="*"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Province" />
                                    </Col>
                                

</Row>


<Row>
                                <Col>
                                    <h5 style={{marginTop:"7px"}}>Contact Information</h5>
                                </Col>  
                            </Row>

                            <Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="URL"
                                            name="URL"
                                            className='inputtype name-id'
                                            type="url"
                                            placeholder="Enter URL" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Phone Number"
                                            fieldRequired="*"
                                            name="phone"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="0301-2345678" />
                                    </Col>

</Row>


                            <Row>
                                    
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Whatsapp Number"
                                            
                                            name="whatsapp"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="0301-2345678" />
                                    </Col>

</Row>
                        </div>
                            </Form>
                            
       
                            <Row className="text-light" style={{paddingBottom:"80px"}}>
                                    <Col className="text-center ">                  
                                <button className="btn-newaccount btn waves-light btn-medium mbl text-light" style={{backgroundColor:"#21AA93"}}>
                                  <Link to="/dashboard" className="text-light">Submit</Link>
                                  </button>
                                      </Col>
                                </Row>
                    
              
              
                </>
            )
            }
        </Formik >
    );
}

export default OrganizationInformation;


