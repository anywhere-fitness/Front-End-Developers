import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './components/AppRouter'
import {Navbar} from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <AppRouter/>
      </Router>
    </div>
  );
}

export default App;
