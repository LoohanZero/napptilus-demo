import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from "./components/primitive/Container";

import Header from "./components/Header";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

function App() {
  return (
    <Container>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/:id" component={Details} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
