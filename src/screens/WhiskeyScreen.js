import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import './WhiskeyScreen.css';

const WhiskeyScreen = () => {
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { error, loading, product } = productDetails;

	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className="whiskey-container">
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row className="cards__item">
					{products
						.filter((product) => product.category === 'whiskey')
						.map((product) => (
							<Col sm={3}>
								<Product product={product} />
							</Col>
						))}
				</Row>
			)}
			<div className="related-products">
				<div className="page-title">
					<h2>If you like this?</h2>
					<p className="sub-title">Why not try one of these</p>
				</div>
			</div>
			<div>
				<Row className="cards__item">
					{products
						.filter((_product) => _product.category === 'whiskey' && _product._id !== product._id)
						.map((product) => (
							<Col sm={3}>
								<Product product={product} />
							</Col>
						))}
				</Row>
			</div>
		</div>
	);
};

export default WhiskeyScreen;
