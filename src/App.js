import React from "react";
import { Container } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container className="App">
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/:id" />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
