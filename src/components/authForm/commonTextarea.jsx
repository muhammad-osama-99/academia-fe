import React from "react";
import { Form } from "react-bootstrap";
import "./authForm.css"
import { Formik,  Field } from "formik";
import { useField } from "formik";
const cities = [
    "Abbottabad",  "Ahmadpur East",  "Attock",  "Badin",  "Bagh",  "Bahawalnagar",  "Bahawalpur",  "Bannu",  "Batagram",  "Bhimber",  "Burewala",  "Chakwal",  "Chaman",  "Charsadda",  "Chichawatni",  "Chiniot",  "Chishtian",  "Dadu",  "Dera Ghazi Khan",  "Dera Ismail Khan",  "DG Khan",  "Dijkot",  "Faisalabad",  "Ghotki",  "Gujranwala",  "Gujrat",  "Hafizabad",  "Haripur",  "Hasilpur",  "Haveli",  "Hyderabad",  "Islamabad",  "Jacobabad",  "Jaffarabad",  "Jamshoro",  "Jhang",  "Jhelum",  "Kalat",  "Kamoke",  "Kandhkot",  "Karachi",  "Kashmore",  "Kasur",  "Khairpur",  "Khanewal",  "Khanpur",  "Kharian",  "Khushab",  "Khuzdar",  "Kohat",  "Kot Adu",  "Lahore",  "Larkana",  "Lodhran",  "Lower Dir",  "Mailsi",  "Mandi Bahauddin",  "Mansehra",  "Mardan",  "Mian Channu",  "Mianwali",  "Mirpur",  "Multan",  "Muridke",  "Muzaffargarh",  "Nankana Sahib",  "Narowal",  "Nasirabad",  "Naudero",  "Nawabshah",  "Nowshera",  "Okara",  "Pattoki",  "Peshawar",  "Quetta",  "Rahim Yar Khan",  "Raiwind",  "Rajanpur",  "Rawalpindi",  "Sadiqabad",  "Sahiwal",  "Sargodha",  "Shikarpur",  "Sialkot",  "Sukkur",  "Swabi",  "Tando Adam",  "Tando Allahyar",  "Toba Tek Singh",  "Vehari",  "Wah Cantonment",  "Wazirabad"
];

export const CitySelect = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Label htmlFor={props.id || props.name} style={{ fontWeight: "500" }}>
                {label}
                <span className="error">{fieldRequired}</span>
            </Form.Label>

            

            <Form.Control className="w-100 signup-form" as="select" name="city">
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>

            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
