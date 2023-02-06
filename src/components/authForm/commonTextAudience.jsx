import React from "react";
import { Form } from "react-bootstrap";
import "./authForm.css"
import { Formik,  Field } from "formik";
import { useField } from "formik";
const audiences = [
    "Both","Academic","Industrial"

];

export const AudienceSelect = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </Form.Label>

            

            <Form.Control className="w-100 signup-form" as="select" name="audiences">
              <option value="">Select Audience</option>
              {audiences.map((audience) => (
                <option key={audience} value={audience}>
                  {audience}
                </option>
              ))}
            </Form.Control>

            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
