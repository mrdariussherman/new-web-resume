import React from 'react'

export class Organzations extends React.Component {
    render(){
        return (
            <div className="card border-0 rounded body-color mt-4">
                <div className="card-header header-color">
                    organizations
                </div>
                <div className="card-body body-color">
                    <div>
                        <b>Theta Tau</b> <br/>
                        Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Since its founding at
                        the University of Minnesota in 1904, over 40,000 brothers have been initiated over the years.
                        With emphasis on quality and a strong fraternal bond, the Fraternity has chapters only at ABET
                        (American Board for Engineering & Technology) accredited schools. <br/>
                        <small><a href="https://thetatau.org/about/">from Theta Tau</a></small>
                        <br/><br/>
                        Rah Rah, Brothers!
                    </div>
                    <hr/>
                    <div>
                        <b>Association of Computing Machinery (ACM)</b> <br/>
                        ACM, the world's largest educational and scientific computing society, delivers resources
                        that advance computing as a science and a profession. ACM provides the computing field's
                        premier Digital Library and serves its members and the computing profession with
                        leading-edge publications, conferences, and career resources. <br/>
                        <small><a href="http://www.acm.org/">from ACM</a></small>
                    </div>
                    <hr/>
                    <div>
                        <b>Women in Computer Science (WICS)</b> <br/>
                        The Women in Computer Science Club (WICS) will promote computer science skills, and provide
                        a supportive environment for all women to join. The goal of the club is to engage female
                        students of computer science and non-computer science majors in STEM-based projects with a
                        major focus on computer science. <br/>
                        <small><a href="https://view2.fdu.edu/">from FDU academics</a></small>
                    </div>
                    <hr/>
                    <div>
                        <b>National Society of Black Engineers (NSBE)</b> <br/>
                        The National Society of Black Engineers (NSBE) is one of the largest student-governed
                        organizations based in the United States. NSBE, founded in 1975, supports and promotes the
                        aspirations of collegiate and pre-collegiate students and technical professionals in engineering
                        and technology. <br/>
                        <small><a href="https://www.nsbe.org/about-us">from ACM</a></small>
                    </div>
                    <hr/>
                    <div>
                        <b>Computing for Compassion (C4C)</b> <br/>
                        Computing for Compassion is a Baylor ECS student organization whose mission is to use our
                        technical gifts to aid those in need.
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}