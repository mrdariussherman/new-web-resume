import React from 'react';
import * as Resume from './resume.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";

function App() {
  return (
    <div className="container">
        <Helmet bodyAttributes={{style: 'background-color : #E6E6E6E6;'}}/>
        <Resume.Resume/>
    </div>
  );
}

export default App;
