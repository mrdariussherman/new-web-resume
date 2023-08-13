import React from 'react'

export class Experience extends React.Component {
    render() {
        return (
            <div className="card border-0 rounded body-color mt-4">
                <div className="card-header header-color">experience</div>
                <div className="card-body body-color">
                    <div>
                        <b>ibm</b> <br/>
                        gtm product manager, worldwide ecosystem <br/>
                        <small>january 2021 - present</small> <br/>
                        In my current role with IBM, I cover all software offerings and work with key strategic partners
                        on their go-to-market strategy. To do this, we analyze market and deal closing trends to ensure
                        that product placement and positioning is accurate for target markets. When an audience/buyer is
                        defined, we create experiences from activations to webinars alike to create leads and push for
                        closes.
                    </div>
                    <hr/>
                    <div>
                        <b>ibm</b> <br/>
                        technical product manager intern <br/>
                        <small>june 2020 - august 2020</small> <br/>
                        As a Technical Product Manager Intern at IBM, I was responsible for a host of activities that
                        aligned with the role of a product manager. For the technical portion of the internship, I was
                        responsible for defining and overseeing feature development for an intern dev team. To
                        do this, I created: user personas, stories, timelines, requirements, and defined acceptance
                        criteria. All of this work wrapped into a product requirement document (PRD). In addition, to
                        that I oversaw their scrum meetings, managed any blockers, and hosted Q&A sessions. To gain
                        business/client facing product experience, I worked with clients to ensure renewal of their S&S
                        subscriptions.
                    </div>
                    <hr/>
                    <div>
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
                    <hr/>
                    <div>
                        <b>cbord</b> <br/>
                        software engineer intern <br/>
                        <small>may 2018 - present</small> <br/>
                        As a Software Engineer Intern, I primarily assist the development team with tasks such as
                        planning, implementation and testing of software. My first project was working to bring new
                        UI/UX to the admin web experience of CSGold using React.js, Bootstrap and CSS. Following
                        this, I transitioned to working with Swift and Objective-C to bring new functionality to
                        existing iOS apps.
                    </div>
                    <hr/>
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
        );
    }
}