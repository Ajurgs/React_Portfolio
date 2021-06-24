import React from 'react';
import Project from './Project';
import scheduler from "../../images/scheduler.PNG";
import hollywoodHub from "../../images/HollywoodHubPage.PNG";
import weatherDash from "../../images/WeatherDashPage.PNG";
import codeQuiz from "../../images/CodeQuizPage.PNG";
export default function Projects(){
    return(
        <div className="container">
        <section id="about" className="card border-light">
            <h2 className="card-header bg-light">Projects</h2>
            <div className="strike"></div>
        </section>
        <section className="row d-flex">
            <Project title="Appointment Scheduler" gitLink="https://github.com/Ajurgs/Appointment-Scheduler" deployLink="https://fast-bastion-27038.herokuapp.com/" src={scheduler}/>
            <Project title="Hollywood Hub" gitLink="https://github.com/Ajurgs/Hollywood-Hub" deployLink="https://strong-one.github.io/Hollywood-Hub/" src={hollywoodHub}/>
            <Project title="Weather Dashboard" gitLink="https://github.com/Ajurgs/WeatherDashboard-APIs" deployLink="https://ajurgs.github.io/WeatherDashboard-APIs/" src={weatherDash}/>
            <Project title="Weather Dashboard" gitLink="https://github.com/Ajurgs/CodeQuizInJavascript" deployLink="https://ajurgs.github.io/CodeQuizInJavascript/" src={codeQuiz}/>
        </section>
        </div>
    )
}