import React from "react";
import { Row, Col,Form as fm } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import {Link} from 'react-router-dom'
import { CommonInput } from "../components/authForm/commonInput";
import "./auth.css"
import user from "../../src/assets/user.png"
import * as Yup from "yup";
import { CitySelect } from "../components/authForm/commonTextarea";
import { ProvinceSelect } from "../components/authForm/commonTextProvince";
import { MaritialSelect } from "../components/authForm/commonTextMaritial";
import { DegreeSelect } from "../components/authForm/commonTextDegree";


function UserInformation() {
    return (
        <Formik
            initialValues={{
                name:'',
                role: '',
                description: '',
                maritialStatus:'',
                fatherName: '',
                gender: '',
                DOB: '',
                cnic: '',
                expertise: '',
                skillset:'',
                phoneno: '',
                address:'',
                province:'',
                city:'',
                
                issn: '',
                publisher: '',
                publisherYear: '',
                impactFactor: '',
                type:'',
                ptitle:'',

                rtitle:'',
                fundingAmount:'',
                rrole:'',
                donor:'',
                startDate:'',
                endDate:'',

                degree:'',
                passingYear:'',
                major:'',
                institute:'',
                country:'',
                cgpa:'',
                degreeStatus:'',

                picture:'',
                cv:'',

                

                workOrganization:'',
                workStatus:'',
                workstartDate:'',
                workType:'',
                department:'',
                designation:'',
                workendDate:'',
                totalYearExperience:'',
                workAddress:'',
                workPhone:'',
                workCity:'',
                workCountry:'',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Name Required")
                    .matches(
                        /^[aA-zZ\s]+$/,
                        "Only alphabets allowed for this field "
                    ),
               
            role: Yup.string().required("Required"),
            
           
            description: Yup.string().required('Description is required').max(100, 'Range must be less than 100'),
  maritialStatus: Yup.string().required('Required'),

  fatherName: Yup.string().required('Father Name is required'),
  gender: Yup.string().required('Gender is required'),
  DOB: Yup.date().required('Date of Birth is required'),
  cnic: Yup.string(),
  expertise: Yup.string(),
  skillset: Yup.string(),
  phoneno: Yup.string(),
  issn: Yup.string(),
  publisher: Yup.string(),
  publisherYear: Yup.date(),
  impactFactor: Yup.string(),
  type: Yup.string(),
  ptitle: Yup.string(),
  rtitle: Yup.string(),
  fundingAmount: Yup.string(),
  rrole: Yup.string(),
  donor: Yup.string(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  degree: Yup.string(),
  passingYear: Yup.date(),
  major: Yup.string(),
  institute: Yup.string(),
  country: Yup.string(),
  cgpa: Yup.string(),
  degreeStatus: Yup.string(),
  picture: Yup.string(),
  cv: Yup.string(),
  address: Yup.string(),
  province: Yup.string(),
  city: Yup.string(),
  workOrganization: Yup.string(),
  workStatus: Yup.string(),
  workstartDate: Yup.date(),
  workType: Yup.string(),
  department: Yup.string(),
  designation: Yup.string(),
  workendDate: Yup.date(),

  totalYearExperience: Yup.date(),
                workAddress: Yup.string(),
                workPhone: Yup.string(),
                workCity: Yup.string(),
                workCountry: Yup.string(),
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
                                    <h4 >User Information</h4>
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
          <Field type="radio" name="picked" value="faculty" className="radio-css"/>
            <label>
            
             <strong><p className="p-row-1">Faculty Account</p></strong> 
            <p className="p-row">A education faculty account</p>
            </label>

          </div>
                                    </div>

                            </div>
                                
                                </Col>

                                <Col>
                                
                                <div className='account-option-select-row-2'>
                                    <div className='radio-select'>
                                    
                                    <div role="group" aria-labelledby="my-radio-group">
                                    <Field type="radio" name="picked" value="student" className="radio-css"/>
                                        <label>
                                        
                                        <strong>  <p className="p-row-1">Student Account</p></strong> 
                                        <p className="p-row">A education student account</p>
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
                                            label="Name"
                                            fieldRequired="*"
                                            name="name"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Name" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Father Name"
                                            fieldRequired="*"
                                            name="fatherName"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Father Name" />
                                    </Col>
                                    <Col md={6}>
                                        <MaritialSelect
                                            id="name"
                                            label="Maritial Status"
                                            fieldRequired="*"
                                            name="maritialStatus"
                                            className='inputtype name-id'
                                            type="text"
                                        
                                            
                                            placeholder="Enter Maritial Status" />
                                    </Col>
                                    <Col sm={6}>
        <fm.Label className="mt-4 text-secondary">Gender:</fm.Label>
        <br />
        <fm.Check
          inline
          label="Male"
          name="group1"
          type="radio"
          className="text-secondary"
        />
        <fm.Check
          inline
          label="Female"
          name="group1"
          type="radio"
          className="text-secondary"
        />
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
                                            placeholder="About Your Self" />
                                    </Col>
                                   

</Row>

<Row>
                                
                            </Row>

                            <Row>
                                    
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="CNIC"
                                            
                                            name="CNIC"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="00000-0000000-0" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Date of Birth"
                                            name="dob"
                                            fieldRequired="*"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Date" />
                                    </Col>

</Row>
<Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Expertise"
                                            name="expertise"
                                            
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Separate by comma" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Skillset"
                                            name="skillset"
                                            
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Separate by comma" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="0301-2345678" />
                                    </Col>

</Row>
<Row>
                                
                            </Row>

                            <Row>
                                    <Col md={6}>
                                        <CommonInput
                                            id="name"
                                            label="Address"
                                            name="address"
                                           
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Address" />
                                    </Col>
                                    <Col md={6}>
                                        <CitySelect
                                            id="name"
                                            label="City"
                                            
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
                                          
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Province" />
                                    </Col>
                                

</Row>






<Row>
                                <Col>
                                    <h5 style={{marginTop:"7px"}}>Qualification</h5>
                                </Col>  
                            </Row>

                            <Row>
                                
                                  
                                    <Col md={6}>
                                        <DegreeSelect
                                            id="degree"
                                            label="Degree"
                                            
                                            name="degree"
                                            className='inputtype name-id'
                                            type="select"
                                            placeholder="Enter Degree" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="major"
                                            label="Major"
                                            
                                            name="major"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Major" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="institute"
                                            label="Institute"
                                            
                                            name="institute"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Institute" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="country"
                                            label="Country"
                                            
                                            name="country"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Country" />
                                    </Col>
</Row>


                            <Row>
                                    
                                    
                                   
                                    <Col md={6}>
                                        <CommonInput
                                            id="cgpa"
                                            label="CGPA"
                                            
                                            name="cgpa"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter CGPA (e.g 3.49)" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="passingYear"
                                            label="Passing Year"
                                            
                                            name="passingYear"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Passing Date" />
                                    </Col>
</Row>



<Row>
                                <Col>                                    <h5 style={{marginTop:"7px"}}>Publication Information</h5>
                                </Col>  
                            </Row>

                            <Row>
                                
                                    <Col md={6}>
                                        <CommonInput
                                            id="issn"
                                            label="ISSN #"
                                            name="issn"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter ISSN" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="ptitle"
                                            label="Title"
                                            
                                            name="ptitle"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Title" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="type"
                                            label="Type"
                                            
                                            name="type"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Publisher Type" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="impactFactor"
                                            label="Impact Factor"
                                            
                                            name="impactFactor"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Impact Factor" />
                                    </Col>
</Row>


                            <Row>
                                    
                                    
                                    <Col md={6}>
                                        <CommonInput
                                            id="publisher"
                                            label="Publisher Name"
                                            
                                            name="publisher"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Publisher Name" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="publisherYear"
                                            label="Publisher Year"
                                            
                                            name="publisherYear"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Publisher Year" />
                                    </Col>

</Row>




<Row>
                                <Col>
                                    <h5 style={{marginTop:"7px"}}>Research Project Information</h5>
                                </Col>  
                            </Row>

                            <Row>
                                
                                  
                                    <Col md={6}>
                                        <CommonInput
                                            id="rtitle"
                                            label="Title"
                                            
                                            name="rtitle"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Title" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="fundingAmount"
                                            label="Funding Amount"
                                            
                                            name="fundingAmount"
                                            className='inputtype name-id'
                                            type="number"
                                            placeholder="Enter Funding Amount (Rs)" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="rrole"
                                            label="Role"
                                            
                                            name="rrole"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Role" />
                                    </Col>
</Row>


                            <Row>
                                    
                                    
                                   
                                    <Col md={6}>
                                        <CommonInput
                                            id="startDate"
                                            label="Start Date"
                                            
                                            name="startDate"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Start Date" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="endDate"
                                            label="End Date"
                                            
                                            name="endDate"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter End Date" />
                                    </Col>
</Row>





<Row>
                                <Col>
                                    <h5 style={{marginTop:"7px"}}>Job Information</h5>
                                </Col>  
                            </Row>

                            <Row>
                                
                                  
                                    <Col md={6}>
                                        <CommonInput
                                            id="workOrganization"
                                            label="Organization Name"
                                            
                                            name="workOrganization"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Organization Name" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="department"
                                            label="Department"
                                            
                                            name="department"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Department" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="designation"
                                            label="Designation"
                                            
                                            name="designation"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter designation" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="workType"
                                            label="Type"
                                            
                                            name="workType"
                                            className='inputtype name-id'
                                            type="text"
                                            placeholder="Enter Type" />
                                    </Col>
</Row> 



                            <Row>
                                    
                                    
                                   
                                    <Col md={6}>
                                        <CommonInput
                                            id="workstartDate"
                                            label="Start Date"
                                            
                                            name="workstartDate"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter Start Date" />
                                    </Col>
                                    <Col md={6}>
                                        <CommonInput
                                            id="workendDate"
                                            label="End Date"
                                            
                                            name="workendDate"
                                            className='inputtype name-id'
                                            type="date"
                                            placeholder="Enter End Date" />
                                    </Col>
</Row>

<Row>
                                
                                  
                                <Col md={6}>
                                    <CommonInput
                                        id="totalYearExperience"
                                        label="Total Job Year Experience"
                                        
                                        name="totalYearExperience"
                                        className='inputtype name-id'
                                        type="number"
                                        placeholder="Enter Year in number" />
                                </Col>
                                <Col md={6}>
                                    <CommonInput
                                        id="workAddress"
                                        label="Work Address"
                                        
                                        name="workAddress"
                                        className='inputtype name-id'
                                        type="text"
                                        placeholder="Enter Work Address" />
                                </Col>
                                <Col md={6}>
                                    <CommonInput
                                        id="workCity"
                                        label="Work City"
                                        
                                        name="workCity"
                                        className='inputtype name-id'
                                        type="text"
                                        placeholder="Enter City" />
                                </Col>
                                <Col md={6}>
                                    <CommonInput
                                        id="workCountry"
                                        label="Work Country"
                                        
                                        name="workCountry"
                                        className='inputtype name-id'
                                        type="text"
                                        placeholder="Enter Country" />
                                </Col>
                                <Col md={6}>
                                    <CommonInput
                                        id="workPhone"
                                        label="Work Phone"
                                        
                                        name="workPhone"
                                        className='inputtype name-id'
                                        type="text"
                                        placeholder="Enter Phone" />
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

export default UserInformation;


