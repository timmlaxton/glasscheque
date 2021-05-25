import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';

const BeerInfoScreen = ({ match }) => {
	const product = products.find((p) => p._id === match.params.id);

	return (
		<>
			<Link className="back-button" to="/">
				<i className="fas fa-arrow-circle-left"></i>
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3> {product.name}</h3>
							<h4>Alc Vol {product.alcoholvol}</h4>
							<h4>£{product.price}</h4>
						</ListGroup.Item>
						<ListGroup.Item>{product.blurb}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
};

export default BeerInfoScreen;
