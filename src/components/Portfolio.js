import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {HashRouter as Router, Switch, Route, useParams} from "react-router-dom";
import About from "./pages/About";
import Projects from './pages/Projects';
import Resume from "./pages/Resume";
import Contact from "./pages/Contact"

export default function Portfolio(){
    return (
        <Router basename="/">
          <Header/>
          <Switch>
            <Route exact path="/">
              <About/>  
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      );

}