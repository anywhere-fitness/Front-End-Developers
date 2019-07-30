import React from 'react';
import {Login} from './components/Login'
import {Navbar} from './components/Navbar'
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
