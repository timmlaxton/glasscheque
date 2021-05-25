import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const BeerScreen = () => {
	return (
		<>
			<h1>Beers</h1>
			<Row className="cards__item">
				{products.map((product) => (
					<Col sm={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default BeerScreen;
