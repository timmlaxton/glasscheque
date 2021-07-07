import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { listProductDetails } from '../actions/productActions';
import Product from '../components/Product';
import './BeerInfoScreen.css';

const WhiskeyInfoScreen = ({ match, history }) => {
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { error, loading, product } = productDetails;

	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};

	return (
		<>
			<Link className="back-button" to="/whiskey">
				<i className="fas fa-arrow-circle-left"></i>
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={4}>
						<ListGroup variant="flush">
							<ListGroup>
								<h3> {product.name}</h3>
								<h4>Alc Vol {product.alcoholvol}</h4>
								<h4>£{product.price}</h4>
							</ListGroup>
						</ListGroup>

						<Card className="add">
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col>
											<h4> {product.countInStock > 0 ? 'In Stock' : 'Currently Unavailable'}</h4>
										</Col>
									</Row>
								</ListGroup.Item>

								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{' '}
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className="btn-block"
										type="button"
										disabled={product.countInStock === 0}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}

			<div className="whiskey-description">
				<Row>
					<div>{product.description} </div>
				</Row>
			</div>
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
		</>
	);
};

export default WhiskeyInfoScreen;
