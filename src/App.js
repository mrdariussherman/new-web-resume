import React from 'react';
import * as Resume from './resume.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";

function App() {
  return (
    <div className="container-fluid App">
        <Helmet bodyAttributes={{style: 'background-color : #f76c6c;'}}/>
        <Resume.Resume/>
    </div>
  );
}

export default App;
