import React from 'react';
import * as Header from './layout/header'
import * as About from './content/about'
import * as EDC from './layout/edc'
import * as Education from "./content/education";
import * as Experience from "./content/experience";
import * as CoreExpertise from "./content/core_expertise";
import * as Leadership from './content/additional_experiences';
import * as Organizations from './content/organizations';
import * as Languages from './content/languages';
import * as Footer from './layout/footer';
import resume from './assets/Darius Sherman Resume.pdf';

export class Resume extends React.Component {
    render() {
        return(
          <div className="container text-center">
              <div className="row sticky-top">
                  <div className="col">
                      <Header.Header/>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col-10">
                      <EDC.EDC/>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col">
                      <a href={resume} download="Darius_Sherman_Resume.pdf">
                          <button className="btn btn-default mb-3"
                                  style={{backgroundColor: '#24305e', color: '#FFFFFF', boxShadow: 'none', fontFamily:
                                          'Avenir Next' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                   className="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1
                                   1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0
                                   1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708
                                   0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354
                                   8.146a.5.5 0 1 0-.708.708z"/>
                              </svg>
                               &nbsp; Darius's Resume
                          </button>
                      </a>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col">
                      <About.About/>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col">
                      <Education.Education/>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col">
                      <Experience.Experience/>
                  </div>
              </div>


              <div className="row justify-content-center">
                  <div className="col">
                      <Leadership.Additional_experiences/>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col">
                      <CoreExpertise.Core_expertise/>
                  </div>
              </div>

              <div className="row justify-content-center">
                  <div className="col">
                      <Organizations.Organzations/>
                  </div>
              </div>

              <div className="row justify-content-center mb-5 pb-3">
                  <div className="col">
                      <Languages.Languages/>
                  </div>
              </div>

              <div className="row">
                  <div className="col">
                      <Footer.Footer/>
                  </div>
              </div>
          </div>
        );
    }
}