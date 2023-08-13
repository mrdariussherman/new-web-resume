import React from 'react';
import * as Header from './header'
import * as About from './about'
import * as EDC from './edc'
import * as Education from "./education";
import * as Experience from "./experience";
import * as Leadership from './leadership';
import * as Organizations from './organizations';
import * as Languages from './languages';
import * as Footer from './footer';

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