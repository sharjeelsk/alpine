import React from 'react'
import "./ContactUs.scss"
import Header from '../Header/Header'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const ContactUs = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [success,setSuccess] = React.useState(null)
    const onSubmit = (data)=>{
        console.log(data)
        axios.post(`${process.env.REACT_APP_DEV_LINK}/contactUs/sendMail`,{
            name:data.name,
            phoneNumber:data.mobileno,
            message:data.Message
        })
        .then(response=>{
            console.log(response);
            setSuccess("Successfully Sent Email !")
        })
    }
    return (
        <div>
            <Header id="3" />
            <div className="contactusdiv">
                <h1>Contact Us</h1>
                <div className="signupdiv">
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="shadow row signupcontent">
                <div style={{textAlign:"left"}} className="col-12">
                <label>
                    Mobile Number
                </label>
                <input className={errors.mobileno?`errorinput`:``} {...register('mobileno',{required:true})} style={{padding:"1% 1%"}} name="mobileno"  placeholder="Enter Your Mobile Number" />
                {errors.mobileno?<div className="ui pointing red basic label">Mobile Number is Invalid</div>:null}
                </div>

                <div style={{textAlign:"left"}} className="col-12">
                <label>
                    Name
                </label>
                <input className={errors.name?`errorinput`:``} {...register('name',{required:true})} style={{padding:"1% 1%"}} name="name"  placeholder="Enter Your Mobile Number" />
                {errors.name?<div className="ui pointing red basic label">Name is Invalid</div>:null}
                </div>

                <div style={{textAlign:"left"}} className="col-12">
                <label>
                    Message
                </label>
                <textarea className={errors.Message?`errorinput`:``} {...register('Message',{required:true})} style={{padding:"1% 1%"}} name="Message"  placeholder="Enter Message" />
                {errors.Message?<div className="ui pointing red basic label">Message is Invalid</div>:null}

                </div>
                
                {
                    success!==null?<p>{success}</p>:null
                }
                <div className="col-12">
                    <button className="blackbutton" type="submit">Submit</button>
                </div> 
            </div>
            </form>
           
        </div>
            </div>
        </div>
    );
}

export default ContactUs;