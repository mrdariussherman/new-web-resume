import React from 'react';
import {Header} from "./header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";
import {Footer} from "./footer";
import {ReactTerminal} from "react-terminal";

export class Landing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            commandKeys: [
                'site', ' exit', " help", " school", " about", " cd", " ls", " education", " experience",
                " leadership", " organizations", " languages", " enter"
            ]
        }
    }

    render() {
        const commands = {
            hello: "hi! how are you?",
            hi: "hello! how can i help you?",
            site: "this website was built by darius using reactjs and it hosted using github pages",
            whoami: "how should i know?",
            exit: "now why would you want to do that?",
            help: "Commands include: " + this.state['commandKeys'].toString() + ". " +
                "There are also some hidden commands to be found!",
            benny: "do you know benny? i do!",
            color: "my favorite color is dark green",
            school: "Darius completed undergrad at Baylor University! SIC 'EM BEARS",
            about: "you'll learn all about darius once you're inside the site",
            cd: "what do you wanna listen to?",
            hack: "BE GONE HACKER!",
            ls: "What would you like to list: education, experience, languages, leadership, or organizations?",
            education: "Darius has a B.S. in Computer Science from Baylor University with focuses in Software " +
                "Engineering and Cyber Security",
            experience: "Darius has worked for: IBM, Hewlett Packard Enterprise, CBORD, and the Research Institute at " +
                "BSWH",
            leadership: "Darius currently serves on 2 boards, acted as an intern site lead, was president of the Mu" +
                "Epsilon chapter of Theta Tau, and Windows and Policy lead of the Baylor Competitive Cyber Security " +
                "Team",
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
            <div className="container align-middle">
                <Helmet/>
                <Header/>
                <div className="col-5">
                    <div className="terminal">
                        <ReactTerminal commands={commands}
                                       errorMessage="Invalid command! For a list of commands try 'help'"
                                       prompt={"$root %"}
                                       themes={theme}
                                       theme="dariussy"
                        />
                    </div>
                </div>
                <button className=" enter btn btn-primary" onClick={this.props["handleState"]}>Mom, I'm scared!</button>
                <Footer/>
            </div>
        );
    }
}


export default Landing;
