import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Product from '../components/Product';
import products from '../products';
import '../components/Cards.css';

const HomeScreen = () => {
	return (
		<>
			<HeroSection />
			<Cards />
			<h1>Beers</h1>
			<Row className="cards__item">
				{products.map((product) => (
					<Col sm={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
			<h1>Gins</h1>
			<Row className="cards__item">
				{products.map((product) => (
					<Col sm={2}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
