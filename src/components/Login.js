import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Login = props => {

    const [member, setMember] = useState({ firstName: "", lastName: "", email:"", password:"", phone:""});

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        };

    const handleSubmit = event => {
        event.preventDefault();
       setMember({ firstName: "", lastName: "", email:"", password:"", phone:""})
         };

    return(
    //     <div className="Form">
    //     <form onSubmit={event => handleSubmit(event)}>
    //         <input
    //           placeholder="First Name"
    //           type="text"
    //           name="firstName"
    //           value={member.firstName}
    //           onChange={handleChange}
    //         />
    //       <br></br>
    //         <input
    //           placeholder="Last Name"
    //           type="text"
    //           name="lastName"
    //           value={member.lastName}
    //           onChange={handleChange}
    //         />
    //       <br></br>
    //         <input
    //           placeholder="Email Address"
    //           type="text"
    //           name="email"
    //           value={member.email}
    //           onChange={handleChange}
    //         />
    //       <br></br>
    //       <input
    //           placeholder="Password"
    //           type="text"
    //           name="password"
    //           value={member.password}
    //           onChange={handleChange}
    //         />
    //       <br></br>
    //       <input
    //           placeholder="Phone Number"
    //           type="text"
    //           name="phone"
    //           value={member.phone}
    //           onChange={handleChange}
    //         />
    //       <br></br>
    //       <button>Create Account</button>
    //     </form>
    //   </div>  
    <div className="form-container">
      <div className="btn-container">
        <button className="user-type-btn user-btn-active">Client</button>
        <button className="user-type-btn">Trainer</button>
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
    <Button type='submit'>Sign Up</Button>
  </Form>
  <button className="member-btn"><Link className="link-btn" to="/MemberLogin">Already a Member?</Link></button>
  </div>
    )
}