import React from 'react'
import { Link } from "react-router-dom";
 
function SignOut(){
    return(
        <button className="signout-btn"><Link className="homepage-btn" to="/">Sign Out</Link></button>
    )
}

export default SignOut