import React from 'react';
import * as Resume from './resume.js';
import * as Landing from './landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";

export class App extends React.Component{
    constructor() {
        super();
        this.state = {start: false};
    }
    render() {
        if (this.state.start === false) {
            return (
                <div className="container">
                    <Helmet/>
                    <Landing.Landing/>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <Helmet/>
                    <Resume.Resume/>
                </div>
            );
        }

    }
}


export default App;
