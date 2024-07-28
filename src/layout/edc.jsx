import React from 'react'
import pic from '../assets/edc.png'

export class EDC extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <img className="card-img-top pt-5" alt="Essentials" src={pic}/>
            </div>
        );
    }
}