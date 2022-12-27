import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/primitive/Container';
import Details from './pages/Details';
import Error from './pages/Error';
import Home from './pages/Home';

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
