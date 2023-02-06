// import React, {useState, useEffect} from 'react'
import React from 'react'
import "./verification.css"
// import {useParams} from 'react-router-dom'
// import axios from 'axios'
// import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'

function ActivationEmail() {
    // const {activation_token} = useParams()
    // const [err, setErr] = useState('')
    // const [success, setSuccess] = useState('')

    // useEffect(() => {
    //     if(activation_token){
    //         const activationEmail = async () => {
    //             try {
    //                 const res = await axios.post('/user/activation', {activation_token})
    //                 setSuccess(res.data.msg)
    //             } catch (err) {
    //                 err.response.data.msg && setErr(err.response.data.msg)
    //             }
    //         }
    //         activationEmail()
    //     }
    // },[activation_token])

    return (
        <div className="verification-container">
            {/* {err && showErrMsg(err)}
            {success && showSuccessMsg(success)} */}
          
  
        <div>
   <h1 >ACADEMIA-INDUSTRY LINKAGE</h1><br></br>
   <p >Your account has been activated. You may now login to access your account.</p>
   
   </div>
  
        </div>
    )
}

export default ActivationEmail
