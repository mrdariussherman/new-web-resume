import React from 'react';
import {Header} from "./header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";
import {Footer} from "./footer";
import {ReactTerminal} from "react-terminal";

export class Landing extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // { handleState } = props
    }
    render() {

        const commands = {
            whoami: "how should i know?",
            exit: "now why would you want to do that?",
            help: "try the command 'view'",
            benny: "do you know benny? i do!",
            color: "dark green",
            school: "baylor u",
            view: this.props.handleState
        };

        return (
            <div className="container">
                <Helmet/>
                <Header/>
                <div className="row align-content-center" style={{display: 'flex',  justifyContent:'center',
                    alignItems:'center', height: '100vh'}}>
                    <div className="col-6 terminal">
                        <ReactTerminal commands={commands}
                                       welcomeMessage={"welcome "}
                                       errorMessage="Invalid command!"
                                       prompt={"$root >"}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default Landing;
