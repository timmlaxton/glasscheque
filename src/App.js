import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import BeerScreen from './screens/BeerScreen';
import GinScreen from './screens/GinScreen';
import WhiskeyScreen from './screens/WhiskeyScreen';
import BeerInfoScreen from './screens/BeerInfoScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/beer/:id" component={BeerInfoScreen} exact />
				<Route path="/beer" component={BeerScreen} exact />
				<Route path="/spirits" component={GinScreen} exact />
				<Route path="/whiskey" component={WhiskeyScreen} exact />
				<Route path="/cart/:id?" component={CartScreen} />
			</Container>

			<Footer />
		</Router>
	);
};

export default App;
