import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Blogs from "./Components/HomePage/Blogs/Blogs";
import Contact from "./Components/HomePage/Contact/Contact";
import Header from "./Components/HomePage/Header/Header";
import Home from "./Components/HomePage/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

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
      </Router>
    </div>
  );
}

export default App;
