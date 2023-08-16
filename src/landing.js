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
            hello: "hi! how are you?",
            whoami: "how should i know?",
            exit: "now why would you want to do that?",
            help: "try the command 'enter'",
            benny: "do you know benny? i do!",
            color: "dark green",
            school: "baylor u",
            about: "you'll learn all about darius once you're inside the site",
            cd: "what do you wanna listen to?",
            hack: "BE GONE HACKER!",
            ls: "what would you like to list: education, experience, languages, leadership, organizations",
            education: "Darius has a BSCS from Baylor University with focuses in Software Engineering and Cyber " +
                "Security",
            experience: "Darius has worked for: IBM, Hewlett Packard Enterprise, CBORD, and the Research Institute at BSWH",
            leadership: "Darius currently serves on 2 boards, acted as an intern site lead, was president of " +
                "Theta Tau, Mu Epsilon, and Windows and Policy lead of the Baylor Competitive Cyber Security Team",
            organizations: "Darius is or has been a member of Theta Tau, ACM, NSBE, Computing 4 Compassion, and WiCS",
            languages: "Darius is fluent in english, java, javascript, c++, c, assembly, html, css, python, and sql. " +
                "He also knows a little french",
            games: "you got games on yo' phone?",
            dariussy: "are you sure we are close enough for that?",
            enter: this.props["handleState"]
        };


        const theme = {
            dariussy: {
                themeBGColor: "#24305e",
                themeToolbarColor: "#DBDBDB",
                themeColor: "#FFFEFC",
                themePromptColor: "#FFB81C"
            },
        }

        return (
            <div className="container">
                <Helmet/>
                <Header/>
                <div className="row align-content-center" style={{display: 'flex',  justifyContent:'center',
                    alignItems:'center', height: '100vh'}}>
                    <div className="col-6 terminal">
                        <ReactTerminal commands={commands}
                                       errorMessage="Invalid command!"
                                       prompt={"$root %"}
                                       themes={theme}
                                       theme="dariussy"
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default Landing;
