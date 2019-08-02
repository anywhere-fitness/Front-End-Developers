import React, { useState } from 'react'

const Form = props => {
    const [input, setIn] = useState({
        name: '',
        email: '',
        role: '',
        id: parseInt(Math.random() * 1000000000)
    })

    const handleChange = e => setIn({
        ...input,
        [e.target.name]: e.target.value
    })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.submit(input)
            setIn({
                name: '', email: '', role: '', id: parseInt(Math.random() * 1000000000)
            })
        }} className='submit-form' >
            <h3>Choose your class</h3>
            <div className='inputs'>

                <label htmlFor="name">
                    Class name:<input type="text" onChange={handleChange} value={input.name} name='name' />
                </label>
                <label htmlFor="email">
                    Time:<input type="text" onChange={handleChange} value={input.email} name='email' />
                </label>
                <label htmlFor="role">
                    Location:<input type="text" onChange={handleChange} value={input.role} name='role' />
                </label>

            </div>

            <button className ='button1'>Add Class</button>
        </form >
    )
}

export default Form