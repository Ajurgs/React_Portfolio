import React from 'react';

export default function About(){
    return(
    <div className="container">
    <section id="about" className="sectionHeader">
        <h2 className="section">About</h2>
        <div className="strike"></div>
    </section>
    <section className="info">
        <aside className="left-aside"></aside>
        <p>
        Software developer with a background in Mathematics;
        with a degree in Applied Mathematics with an emphasis in Computer Science from the University of Colorado Colorado Springs (UCCS).
        A graduate from the University of Denver with a Full Stack Web Development certificate with a keen understanding of programming and coding.
        Skilled in C#, JavaScript, Node.js, and MySQL with a penchant for problem-solving, creating new applications, and finding new ways to accomplish tasks. 
        Excited to leverage skills in the software development space, creating intuitive programs and systems that engage users and maximize their experience.
        </p>
        <aside className="right-aside"></aside>
    </section>
    </div>
    )
}