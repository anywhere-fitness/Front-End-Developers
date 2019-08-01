import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export const MemberLogin = props => {
    const [member, setMember] = useState({ email:"", password:""});

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        };

    const handleSubmit = event => {
        event.preventDefault();
       setMember({ email:"", password:""})
         };
         const [isClient, setIsClient] = useState(true)

         const removeClassBtn = () =>{
          document.querySelectorAll(".user-type-btn").forEach(el => el.classList.remove("user-btn-active"));
         }
    return(
        <div className="form-container">
        <div className="btn-container">
        <button id="b1"className="user-type-btn user-btn-active" onClick={() =>{
               setIsClient(true);
          removeClassBtn()
          document.getElementById("b1").classList.add("user-btn-active");
     
        
        }}>Client</button>
        <button id="b2"className="user-type-btn" onClick={() =>{
           setIsClient(false);
        removeClassBtn()
          document.getElementById("b2").classList.add("user-btn-active");
         
        
        }}>Trainer</button>
        </div>
      <Form className="form" onSubmit={event => handleSubmit(event)}>
      <Form.Field className="form-field">
        <input placeholder='Email' type='text' name="email" value={member.email} onChange={handleChange}/>
      </Form.Field>
      <Form.Field className="form-field">
        <input placeholder='Password' type='text' name="password" value={member.password} onChange={handleChange}/>
      </Form.Field>
      <br></br>
      <Button type='submit'><Link className="submit-btn" to={(isClient ? "/ClientDashboard" : "/TrainerDashboard")}>Sign In</Link></Button>
    </Form>
    <button className="member-btn"><Link className="link-btn" to="/">Don't Have an Account?</Link></button>
    </div>
    )
}
