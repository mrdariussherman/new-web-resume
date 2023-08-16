import React from 'react';
import * as Resume from './resume.js';
import * as Landing from './landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {start: true};
        this.stateHandler = this.stateHandler.bind(this);
    }

    stateHandler() {
        this.setState({start: false});
    }

    render() {
        if (this.state.start === true) {
            return (
                <div className="container">
                    <Helmet/>
                    <Landing.Landing handleState={this.stateHandler}/>
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
