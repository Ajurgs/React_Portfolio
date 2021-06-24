import React from 'react';
import pdf from '../../pdf/Resume.pdf'

export default function Resume(){
    return(
        <div className="container">
        <section id="about" className="card border-light">
            <h2 className="card-header bg-light">Resume</h2>
            <div className="card-body">
                <a href={pdf}>Download Resume</a>
                <h3>Proficiencies</h3>
                <ul className=''>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>express.js</li>
                    <li>MySql</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C++</li>
                </ul>
            </div>

        </section>
        </div>
    )
}