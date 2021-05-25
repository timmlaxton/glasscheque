import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import BeerScreen from './screens/BeerScreen';
import BeerInfoScreen from './screens/BeerInfoScreen';

const App = () => {
	return (
		<Router>
			<main>
				<Header />
				<Container>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/beer/:id" component={BeerInfoScreen} exact />
					<Route path="/beer" component={BeerScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
