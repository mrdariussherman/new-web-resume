import React from 'react';
import * as Header from './layout/header'
import * as About from './content/about'
import * as EDC from './layout/edc'
import * as Education from "./content/education";
import * as Experience from "./content/experience";
import * as Leadership from './content/leadership';
import * as Organizations from './content/organizations';
import * as Languages from './content/languages';
import * as Footer from './layout/footer';

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
                      <div>
                          <About.About/>
                      </div>
                  </div>
                  <div className="col">
                      <div>
                          <Education.Education/>
                      </div>
                  </div>
              </div>



              <div className="row justify-content-center">
                  <div className="col">
                      <Experience.Experience/>
                  </div>
              </div>


              <div className="row justify-content-center">
                  <div className="col">
                      <Leadership.Leadership/>
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