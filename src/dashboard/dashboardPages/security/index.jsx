import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './security.css';
function RecoverPassword() {
  return (
    <Row className="w-50 mx-auto mt-5 main-security">
      <h3>Recover Password</h3>
      <Col sm={12}>
        <Form.Label className="mt-3 text-secondary">Old Password *</Form.Label>
        <Form.Control type="password" className="signup-form" />
      </Col>
      <Col sm={12}>
        <Form.Label className="mt-3 text-secondary">New Password *</Form.Label>
        <Form.Control type="password" className="signup-form" />
      </Col>
      <Col sm={12}>
        <Form.Label className="mt-3 text-secondary">
          Confirm Password *
        </Form.Label>
        <Form.Control type="password" className="signup-form" />
      </Col>
      <Col sm={12}>
        <div className="text-center mt-3" >
        <button className=" text-light form-btn fw-bold btn  btn-medium " type="submit" style={{backgroundColor:"#6D70C6", justifyContent:"center"}}>Update Password</button>
          
        </div>
      </Col>
    </Row>
  );
}

export default RecoverPassword;
