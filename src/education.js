import React from 'react'

export class Education extends React.Component {
    render() {
        return (
            <div className="card border-0 rounded body-color mt-5">
                <div className="card-header header-color">
                    education
                </div>
                <div className="card-body">
                    <b>Baylor University</b> <br/>
                    Bachelor of Science, Computer Science <br/>
                    December 2020 <br/>
                    <b>Courses: </b>
                    Introduction to Computer Science I, Introduction to Computer Science II, Discrete Structures,
                    Computer Systems, Data Structures, Database Design and Applications, Introduction to Algorithms,
                    Software Engineering I, Software Engineering II
                </div>
            </div>
        );
    }
}