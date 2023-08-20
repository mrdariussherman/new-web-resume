import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

export class Footer extends React.Component {
    render() {
        return(
            <footer className="App-footer align-items-center">
                <div className="py-3 align-middle text-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/mrdariussherman">
                        <span className="fab fa-2x fa-twitter mr-4"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mrdariussherman">
                        <span className="fab fa-2x fa-facebook mr-4"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mrdariussherman">
                        <span className="fab fa-2x fa-instagram mr-4"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dariussherman/">
                        <span className="fab fa-2x fa-linkedin mr-4"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/mrdariussherman">
                        <span className="fab fa-2x fa-github"/>
                    </a>
                </div>
            </footer>
        );
    }
}