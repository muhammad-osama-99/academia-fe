import React from "react";
import { Form } from "react-bootstrap";
import "./authForm.css"
import { Formik,  Field } from "formik";
import { useField } from "formik";
const engagements = [
    "Full Time","Part Time","Visiting Faculty",

];

export const EngagementSelect = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </Form.Label>

            

            <Form.Control className="w-100 signup-form" as="select" name="engagements">
              <option value="">Select Engagements</option>
              {engagements.map((engagement) => (
                <option key={engagement} value={engagement}>
                  {engagement}
                </option>
              ))}
            </Form.Control>

            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
