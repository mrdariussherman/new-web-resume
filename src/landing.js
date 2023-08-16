import React from 'react';
import {Header} from "./header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";
import {Footer} from "./footer";
import {ReactTerminal} from "react-terminal";

export class Landing extends React.Component{

    render() {
        const commands = {
            whoami: "how should i know?",
            exit: "now why would you want to do that?"
        };

        return (
            <div className="container">
                <Helmet/>
                <Header/>
                <div className="container" style={{display: 'flex',  justifyContent:'center',
                    alignItems:'center', height: '100vh'}}>
                    <ReactTerminal commands={commands}
                                   welcomeMessage="Welcome to the party! Enter view to continue."
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}


export default Landing;
