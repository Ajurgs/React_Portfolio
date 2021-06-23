import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {HashRouter as Router, Switch, Route, useParams} from "react-router-dom";
import About from "./components/About";
import Projects from './components/Projects';
import Resume from "./components/Resume";
import Contact from "./components/Contact"
function App() {
  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
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

export default App;
