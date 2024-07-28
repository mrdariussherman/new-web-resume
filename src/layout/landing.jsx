import React from 'react';
import {Header} from "./header";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";
import {Footer} from "./footer";
import {ReactTerminal} from "react-terminal";

export class Landing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            commandKeys: [
                'site', ' exit', " help", " school", " about", " cd", " ls", " and enter"
            ]
        }
    }

    get_text(props){
        const ls_data = {
            education: "Darius has a B.S. in Computer Science from Baylor University with focuses in Software " +
                "Engineering and Cyber Security",
            experience: "Darius has worked for: IBM, Hewlett Packard Enterprise, CBORD, and the Research Institute at " +
                "BSWH",
            leadership: "Darius currently serves on 2 boards, acted as an intern site lead, was president of the Mu " +
                "Epsilon chapter of Theta Tau, and Windows and Policy lead of the Baylor Competitive Cyber Security " +
                "Team",
            organizations: "Darius is or has been a member of Theta Tau, ACM, NSBE, Computing 4 Compassion, and WiCS",
            languages: "Darius is fluent in english, java, javascript, c++, c, assembly, html, css, python, and sql. " +
                "He also knows a little french"
        }

        return ls_data[props] ? ls_data[props] : "Access denied";
    }

    render() {
        const theme = {
            dariussy: {
                themeBGColor: "#24305e",
                themeToolbarColor: "#DBDBDB",
                themeColor: "#FFFEFC",
                themePromptColor: "#FFB81C"
            },
        }

        const commands = {
            hello: "hi! how are you?",
            hi: "hello! how can i help you?",
            site: "this website was built by darius using reactjs and it is hosted using github pages",
            whoami: "how should i know?",
            exit: "now why would you want to do that?",
            help: "commands include: " + this.state['commandKeys'].toString() + ". " +
                "there are also some ~hidden~ commands to be found!",
            benny: "do you know benny? i do!",
            color: "my favorite color is dark green",
            school: "darius completed undergrad at Baylor University! SIC 'EM BEARS",
            about: "you'll learn all about darius once you're inside the site",
            cd: "what do you wanna listen to?",
            ls: (directory) => directory ? `${this.get_text(directory.toString())}` : "what would you like to list: " +
                "education, experience, languages, leadership, or organizations?",
            hack: "BE GONE HACKER!",
            games: "you got games on yo' phone?",
            dariussy: "are you sure we are close enough for that?",
            sudo: "Clever, but not clever enough.",
            su: "Clever, but not clever enough.",
            enter: this.props["handleState"]
        };

        return (
            <div className="container align-middle">
                <Helmet/>
                <Header/>
                <div className="col-5">
                    <div className="terminal">
                        <ReactTerminal commands={commands}
                                       errorMessage="Invalid command! For a list of commands try 'help'"
                                       prompt={"$root@darius.dev %"}
                                       themes={theme}
                                       theme="dariussy"
                                       welcomeMessage={"Hi! Lost? Try \"help\"! \n"}
                        />
                    </div>
                </div>
                <button className="enter btn btn-default"
                        style={{backgroundColor: '#24305e', color: '#FFFFFF', boxShadow: 'none',
                            fontFamily: 'Avenir Next' }}
                        onClick={this.props["handleState"]}>show me the site</button>
                <Footer/>
            </div>
        );
    }
}


export default Landing;
