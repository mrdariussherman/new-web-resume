import React from 'react'
import pic from '././assets/edc.png'

export class EDC extends React.Component {
    render() {
        return(
            <div className="container-fluid pt-5">
                <img className="img-fluid ma" alt="Essentials" src={pic}/>
            </div>
        );
    }
}