import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

export const Login = props => {

    const [member, setMember] = useState({ firstName: "", lastName: "", email:"", password:"", phone:""});

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        };

    const handleSubmit = event => {
        event.preventDefault();
        setMember({ firstName: "", lastName: "", email:"", password:"", phone:""})
         };

    const [isClient, setIsClient] = useState(true)
         const removeClassBtn = () =>{
          document.querySelectorAll(".user-type-btn").forEach(el => el.classList.remove("user-btn-active"));
         }
         useEffect(() => {
          axios.get('https://anywhere-fitness-be-jrl.herokuapp.com/api/users')
          .then(res => {
            console.log(res.data)
          })
          .catch(e => {
            console.log(e)
          });
        }, []);
         
    return(
    
    <div className="form-container">
      <div className="btn-container">
        <button id="b3"className="user-type-btn user-btn-active" onClick={() =>{
               setIsClient(true);
                removeClassBtn();
                document.getElementById("b3").classList.add("user-btn-active");
     
        }}>Client</button>
        <button id="b4" className="user-type-btn" onClick={() =>{
               setIsClient(false);
                removeClassBtn();
                document.getElementById("b4").classList.add("user-btn-active");
     
        
        }}>Trainer</button>
      </div>
    <Form className="form" onSubmit={event => handleSubmit(event)}>
    <Form.Field className="form-field">
      <input placeholder='First Name' type='text' name="firstName" value={member.firstName} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <input placeholder='Last Name' type='text' name="lastName" value={member.lastName} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <input placeholder='Email' type='text' name="email" value={member.email} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <input placeholder='Password' type='text' name="password" value={member.password} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <input placeholder='Phone Number' type='text' name="phone" value={member.phone} onChange={handleChange}/>
    </Form.Field>
    <br></br>
    <Button type='submit'><Link className="submit-btn" to={(isClient ? "/ClientDashboard" : "/TrainerDashboard")}>Sign Up</Link></Button>
  </Form>
  <button className="member-btn"><Link className="link-btn" to="/MemberLogin">Already a Member?</Link></button>
  </div>
    )
}