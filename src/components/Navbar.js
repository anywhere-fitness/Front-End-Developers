import React, { useEffect, useState } from 'react';
import logo from '../img/logo-w.png';

export const Navbar = props => {

    return(
        <div className="logo-wrap">
        <img className="logo" src={logo}/>
        <h1 className="title">Anywhere Fitness</h1>
        </div>
    )
}