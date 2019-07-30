import React, { useEffect, useState } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../App.css';

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
    <Form className="form" onSubmit={event => handleSubmit(event)}>
    <Form.Field className="form-field">
      <label>First Name</label>
      <input placeholder='First Name' type='text' name="firstName" value={member.firstName} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <label>Last Name</label>
      <input placeholder='Last Name' type='text' name="lastName" value={member.lastName} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <label>Email</label>
      <input placeholder='Email' type='text' name="email" value={member.email} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <label>Password</label>
      <input placeholder='Password' type='text' name="password" value={member.password} onChange={handleChange}/>
    </Form.Field>
    <Form.Field className="form-field">
      <label>Phone Number</label>
      <input placeholder='Phone Number' type='text' name="phone" value={member.phone} onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    )
}