import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./nav/Home";
import Brand from "./nav/Brand";
import Flavor from "./nav/Flavor";
import About from "./nav/About";
import Contact from "./nav/Contact";
import Login from "./components/Login";
import Mbrand from "./manager/Mbrand";
import Mflavor from "./manager/Mflavor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/brand" exact component={Brand} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/flavor" exact component={Flavor} />
          <Route path="/login" exact component={Login} />
          <Route path="/mbrand" exact component={Mbrand} />
          <Route path="/mflavor" exact component={Mflavor} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
