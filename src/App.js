import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from "./components/primitive/Container";

import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";



function App() {
  return (
    <Container>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/:id" component={Details} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
