import React from 'react'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import js from '../assets/js.jpg'
import react from '../assets/react.svg'
import angular from '../assets/angular.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import python from '../assets/python.png'
import sql from '../assets/mysql.png'
import ansible from '../assets/Ansible_Logo.png'
import swift_logo from '../assets/swift.png'
import objc from '../assets/objective-c-logo.png'
import openshift from '../assets/OpenShift-LogoType.png'
import pandas from '../assets/pandas.svg'
import terraform from '../assets/terraform-icon-1803x2048-hodrzd3t.png'



export class Languages extends React.Component {
    render() {
        return (
            <div className="card body-color mt-4">
                <div className="card-header header-color text-center">
                    technologies
                </div>
                <div id="information" className="card-body">
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={cpp} alt="C++"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={java} alt="Java SE"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={js} alt="JavaScript"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={react} alt="React.js"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={angular} alt="AngularJS"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={html} alt="HTML5"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={css} alt="CSS"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={bootstrap} alt="Bootstrap"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={python} alt="Python"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={sql} alt="MySQL"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={ansible} alt="Ansible"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={swift_logo} alt="Swift"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={objc} alt="Objective-C"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={openshift} alt="OpenShift"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={pandas} alt="Pandas"/>
                    <img id="logo" className="language img-fluid mx-2 mb-3" src={terraform} alt="terraform"/>
                </div>
            </div>
        );
    }
}