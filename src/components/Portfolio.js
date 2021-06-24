import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {HashRouter as Router, Switch, Route, useParams} from "react-router-dom";
import About from "./pages/About";
import Projects from './pages/Projects';
import Resume from "./pages/Resume";
import Contact from "./pages/Contact"

const styles = {
    portfolioBody:{
        minHeight:'79vh'
    }
}

export default function Portfolio(){
    return (
        <Router basename="/" >
          <Header/>
          <div style={styles.portfolioBody} >
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
          </div>
          <Footer/>
        </Router>
      );

}