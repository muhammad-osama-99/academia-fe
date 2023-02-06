import React from "react";
import { Form } from "react-bootstrap";
import "./authForm.css"
import { Formik,  Field } from "formik";
import { useField } from "formik";
const maritial = [
    "Single","Married","Divorced","Widowed"

];

export const MaritialSelect = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </Form.Label>

            

            <Form.Control className="w-100 signup-form" as="select" name="maritial">
              <option value="">Select Maritial</option>
              {maritial.map((maritia) => (
                <option key={maritia} value={maritia}>
                  {maritia}
                </option>
              ))}
            </Form.Control>

            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
