import React from 'react';
import * as Header from './header'
import * as About from './about'
import * as EDC from './edc'
import * as Education from "./education";
import * as Experience from "./experience";
import * as Organizations from './organizations';
import * as Languages from './languages'

export class Resume extends React.Component {
    render() {
        return(
          <div className="container-fluid text-center align-content-center mb-4">
              <div className="row align-content-center text-center">
                  <div className="col">
                      <Header.Header/>
                  </div>
              </div>
              <div className="row align-content-center text-center">
                  <div className="col-2"/>
                  <div className="col">
                      <EDC.EDC/>
                  </div>
                  <div className="col-2"/>
              </div>
              <div className="row align-content-center text-center">
                  <div className="col-2"/>
                  <div className="col-8">
                      <About.About/>
                  </div>
                  <div className="col-2"/>
              </div>
              <div className="row align-content-center text-center">
                  <div className="col-2"/>
                  <div className="col-8">
                      <Education.Education/>
                  </div>
                  <div className="col-2"/>
              </div>
              <div className="row align-content-center text-center">
                  <div className="col-2"/>
                  <div className="col-8">
                      <Experience.Experience/>
                  </div>
                  <div className="col-2"/>
              </div>
              <div className="row align-content-center text-center">
                  <div className="col-2"/>
                  <div className="col-8">
                      <Organizations.Organzations/>
                  </div>
                  <div className="col-2"/>
              </div>
              <div className="row align-content-center text-center">
                  <div className="col-2"/>
                  <div className="col-8">
                      <Languages.Languages/>
                  </div>
                  <div className="col-2"/>
              </div>
          </div>
        );
    }
}