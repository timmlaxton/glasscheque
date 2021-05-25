import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className="my-1 p-6">
			<Link to={`/beer/${product._id}`}>
				<Card.Img src={product.image} variant="top" />
			</Link>

			<Card.Body>
				<Link to={`/beer/${product._id}`}>
					<Card.Title as="div" className="mb-1">
						<strong>{product.brand}</strong>
					</Card.Title>
				</Link>

				<Card.Text>£{product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
