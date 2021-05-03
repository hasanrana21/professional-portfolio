import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AboutMe from "./Components/AboutMe/AboutMe";
import Blogs from "./Components/HomePage/Blogs/Blogs";
import Contact from "./Components/HomePage/Contact/Contact";
import Footer from "./Components/HomePage/Footer/Footer";
import Header from "./Components/HomePage/Header/Header";
import Home from "./Components/HomePage/Home/Home";
import ProjectsData from "./Components/HomePage/ProjectsData/ProjectsData";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>

            <Route path="/projectsData">
              <ProjectsData />
            </Route>
            <Route path="/aboutMe">
              <AboutMe />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
