import React from 'react'

export class Organzations extends React.Component {
    render(){
        return (
            <div className="container p-0 mt-4">
                <div className="card-header rounded header-color">
                    organizaions
                </div>
                <div className="card-body body-color">
                    <div className="row text-center align-content-center">
                        <div className="col">
                            <b>association of computing machinery (acm)</b> <br/>
                            ACM, the world's largest educational and scientific computing society, delivers resources
                            that advance computing as a science and a profession. ACM provides the computing field's
                            premier Digital Library and serves its members and the computing profession with
                            leading-edge publications, conferences, and career resources. <br/>
                            <small><a href="http://www.acm.org/">from ACM</a></small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row text-center align-content-center">
                        <div className="col">
                            <b>american medical student association (amsa)</b> <br/>
                            The American Medical Student Association (AMSA), with a half-century history of medical
                            student activism, is the oldest and largest independent association of
                            physicians-in-training in the United States. <br/>
                            <small><a href="https://www.amsa.org/">from AMSA</a></small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row text-center align-content-center">
                        <div className="col">
                            <b>women in computer science (wics)</b> <br/>
                            The Women in Computer Science Club (WICS) will promote computer science skills, and provide
                            a supportive environment for all women to join. The goal of the club is to engage female
                            students of computer science and non-computer science majors in STEM-based projects with a
                            major focus on computer science. <br/>
                            <small><a href="https://view2.fdu.edu/">from FDU academics</a></small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}