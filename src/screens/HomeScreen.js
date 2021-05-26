import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Cards from '../components/Cards';
import Product from '../components/Product';
import '../components/Cards.css';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<Jumbotron>
				<div className="jumbotron-address">
					<p>Pivo</p>
					<p>157 Great Western Road</p>
					<p>Glasgow</p>
					<p> G20 4BE </p>
				</div>
				<div className="jumbotron-hours">
					Hours <p>Sun: 12 - 8 </p>
					<p>Mon: 11- 9 </p>
					<p>Tue: 11- 9 </p>
					<p>Wed: 11- 9</p>
					<p>Thr: 11- 9 </p>
					<p>Fr: 11- 9 </p>
					<p>Sat: 11- 9 </p>{' '}
				</div>
			</Jumbotron>

			<Cards />
			<h1>Beers</h1>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<Row className="cards__item">
					{products.map((product) => (
						<Col sm={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreen;
