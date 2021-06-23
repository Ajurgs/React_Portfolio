import React from 'react';
import Project from './Project';
import scheduler from "../images/scheduler.PNG";

export default function Projects(){
    return(
        <>
        <section id="about" className="sectionHeader">
            <h2 className="section">Projects</h2>
            <div className="strike"></div>
        </section>
        <section>
            <Project title="Appointment Scheduler" gitLink="https://github.com/Ajurgs/Appointment-Scheduler" deployLink="https://fast-bastion-27038.herokuapp.com/" src={scheduler}/>
        </section>
        </>
    )
}