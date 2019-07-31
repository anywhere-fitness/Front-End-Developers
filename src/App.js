import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {Login} from './components/Login'
import {Navbar} from './components/Navbar'
import {MemberLogin} from './components/MemberLogin';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
