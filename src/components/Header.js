import React from 'react';
import logo from "../images/NDLogoVectorSmall.png"
import {Link, useRouteMatch} from 'react-router-dom';


export default function Header(){
    
    return(
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Avatar" width="60" height="80"  className="d-inline-block align-text-center"/>
          Alexander Jurgs
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <HighlightLink label="ABOUT" to="/" onlyExact={true} />
              <HighlightLink label="PROJECTS" to="/projects" onlyExact={false}/>
              <HighlightLink label="RESUME" to="/resume" onlyExact={false}/>
              <HighlightLink label="CONTACT" to="/contact" onlyExact={false}/>
          </ul>
        </div>
      
      </div>
    </header>
    )
}


function HighlightLink({label,to,onlyExact}){
    let match = useRouteMatch({
        path:to,
        exact:onlyExact,
    })

    return(
        <li className="nav-item">
            <Link to={to} className={match?"nav-link":"nav-link"}>{label}</Link>
        </li>
    )
}