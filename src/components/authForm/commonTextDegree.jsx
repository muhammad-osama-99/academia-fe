import React from "react";
import { Form } from "react-bootstrap";
import "./authForm.css"
import { Formik,  Field } from "formik";
import { useField } from "formik";
const degrees = [
   "BS","BSc","B.IT","B.Com","BCS","B.ed","Btech","BA","CA","MS","MSc","Phd"

];

export const DegreeSelect = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </Form.Label>

            

            <Form.Control className="w-100 signup-form" as="select" name="maritial">
              <option value="">Select Degree</option>
              {degrees.map((degree) => (
                <option key={degree} value={degree}>
                  {degree}
                </option>
              ))}
            </Form.Control>

            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
