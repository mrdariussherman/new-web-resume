import React from 'react'
import baylor from "../assets/baylor.png";

export class Education extends React.Component {
    render() {
        return (
            <div className="card rounded body-color mt-4">
                <div className="card-header header-color">education</div>
                <div className="card-body">
                    <b>Baylor University</b> <br/>
                    Bachelor of Science, Computer Science <br/>
                    <small>Software Engineering & Cyber Security</small><br/><br/>
                    <b>Courses: </b>
                    Introduction to Computer Science I/II, Discrete Structures, Computer Systems, Operating Systems,
                    Data Structures, Database Design and Applications, Introduction to Algorithms,
                    Software Engineering I/II, Competitive Cyber Security, Data Communication (Networking),
                    Engineering Economics, Software Quality Analysis <br/>
                    <img id="logo" height={150} width={150} className="img-fluid" src={baylor} alt="Baylor"/>
                </div>
            </div>
        );
    }
}