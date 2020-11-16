import React from "react";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import Download from "./pages/Download";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/download" component={Download}></Route>
      </Router>
    </div>
  );
}

export default App;
