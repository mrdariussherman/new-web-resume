import React from 'react'

export class Experience extends React.Component {
    render() {
        return (
            <div className="container p-0 mt-5">
                <div className="card-header rounded header-color">
                    experience
                </div>
                <div className="card-body body-color">
                    <div className="row text-center align-content-center">
                        <div className="col">
                            <b>hewlett packard enterprise</b> <br/>
                            software engineer intern <br/>
                            <small>may 2019 - august 2019</small> <br/>
                            While with HPE, I created an internal web tool for the automatic generation of defect
                            reports. This tool was built using Python (logic and API), PostgreSQL (backend/database)
                            and React. While building the tool, I followed the Agile methodology. During this project,
                            I strengthened my skills in self-starting, Agile methodology, scripting, documentation,
                            teamwork, web development (UI/UX), prioritization, code refactoring, VMs, cyber security
                            and working with a PO, PM and team of developers. This tool will have a huge impact on
                            productivity as it will save Scrum Masters countless hours because each report (generated
                            on a weekly and sometimes daily basis) previously took an hour or more to produce.
                        </div>
                    </div>
                    <hr/>
                    <div className="row text-center align-content-center">
                        <div className="col">
                            <b>cbord</b> <br/>
                            software engineer intern <br/>
                            <small>may 2018 - present</small> <br/>
                            As a Software Engineer Intern, I primarily assist the development team with tasks such as
                            planning, implementation and testing of software. My first project was working to bring new
                            UI/UX to the admin web experience of CSGold using React.js, Bootstrap and CSS. Following
                            this, I transitioned to working with Swift and Objective-C to bring new functionality to
                            existing iOS apps.
                        </div>
                    </div>
                    <hr/>
                    <div className="row text-center align-content-center">
                        <div className="col">
                            <b>research institute</b> @ <b>baylor scott & white health</b> <br/>
                            simulation software intern<br/>
                            <small>may 2017 - august 2017</small> <br/>

                            As a Simulation Software Intern, I was primarily in charge of developing simulation
                            software for the HTC Vive and Oculus Rift virtual reality devices. This software would
                            render bone models to the device and given the axis information from the controller could
                            render a cutting plane to allow doctors to analyze the fit of ball-and-socket joints. In
                            addition to integrating this technology into the medical field, I also facilitated a study
                            that would help bring virtual reality into training the next generation of surgeons.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}