import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import home from './components/home-component/home';
import AboutUs from './components/AboutUs';
import Feed from './components/Feed';
import "antd/dist/antd.css";
import ProjectHeader from './components/ProjectHeader';


function App() {
  return (
    <div className="App">
      <Router>
        <ProjectHeader />
        <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/Aboutus" component={AboutUs} />
        <Route exact path="/feeds" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


