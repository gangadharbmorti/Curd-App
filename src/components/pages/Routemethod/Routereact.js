import React from "react";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Navabar from "../Navbar/Navabar";

import Home from "../Home/Home";
import About from "../About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../Contact/Contact";
import Pagenotfound from "../Notfound/Pagenotfound";
import StudentData from "../Students/StudentData";
import Edit from "../Students/Edit";

const Routereact = () => {
  return (
    <Router>
      <div>
        <Navabar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/students/add" component={StudentData} />
          <Route exact path="/students/edit/:id" component={Edit} />
          <Route component={Pagenotfound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routereact;
