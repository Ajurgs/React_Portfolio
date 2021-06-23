import React from 'react';
import Navigation from './Navigation';
import logo from "../images/NDLogoVectorSmall.png"
export default function Header(){
    return(
    <header className="header">
      <div className="logo-header">
        <div>
          <img src={logo} alt="Avatar" />
        </div>
        <h1>Alexander Jurgs</h1>
      </div>
      <Navigation/>
    </header>
    )
}