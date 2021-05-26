import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';

const BeerInfoScreen = ({ match }) => {
	const [qty, setQty] = useState(1);
	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${match.params.id}`);

			setProduct(data);
		};
		fetchProduct();
	}, []);

	const addToCartHandler = () => {};

	return (
		<>
			<Link className="back-button" to="/">
				<i className="fas fa-arrow-circle-left"></i>
			</Link>
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
			<div className="description">
				<Row>
					<h5>{product.description} </h5>
				</Row>
			</div>
		</>
	);
};

export default BeerInfoScreen;
