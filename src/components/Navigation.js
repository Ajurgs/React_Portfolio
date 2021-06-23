import React from 'react';
import {Link} from 'react-router-dom';
export default function Navigation(){
    return (
    <nav className="navbar">
        <ul>
            <li><Link to="/">ABOUT</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/resume">RESUME</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    </nav>

    )
}