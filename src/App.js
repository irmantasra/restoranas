import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard/:sections" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
