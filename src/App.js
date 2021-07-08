import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BeerScreen from './screens/BeerScreen';
import GinScreen from './screens/GinScreen';
import WhiskeyScreen from './screens/WhiskeyScreen';
import BeerInfoScreen from './screens/BeerInfoScreen';
import WhiskeyInfoScreen from './screens/WhiskeyInfoScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/beer/:id" component={BeerInfoScreen} exact />
				<Route path="/whiskey/:id" component={WhiskeyInfoScreen} exact />
				<Route path="/beer" component={BeerScreen} exact />
				<Route path="/spirits" component={GinScreen} exact />
				<Route path="/whiskey" component={WhiskeyScreen} exact />
				<Route path="/cart/:id?" component={CartScreen} />
				<Route path="/login" component={LoginScreen} />
				<Route path="/profile" component={ProfileScreen} />
			</Container>

			<Footer />
		</Router>
	);
};

export default App;
