import React from 'react'

export class About extends React.Component {
    render() {
        return(
           <div className="card border-0 rounded body-color">
               <div className="card-header header-color">
                   about me
               </div>
               <div className="card-body">
                   I am a senior computer science student at Baylor University originally
                   from Dallas, Texas. Within computer science, I have found a passion for UI/UX,
                   data analytics and product/project management. I am currently seeking internship opportunities
                   that will allow me to grow in those categories primarily for Summer 2020. Currently, my plans for
                   the future are to enter a Ph.D. program in Computer Science to pursue work in academia. Within this
                   program, I intend to research STEAM education in some capacity. My interests outside of computer
                   science are: music (classical), playing clarinet (both in an ensemble and soloistic), consumer
                   electronics, naps and food! When I am not coding, you can find me enjoying one of those.
               </div>
           </div>
        );
    }
}