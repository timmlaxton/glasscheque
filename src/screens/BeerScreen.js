import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const BeerScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');

			setProducts(data);
		};
		fetchProducts();
	}, []);

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
