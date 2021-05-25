import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
	return (
		<div className="cards">
			<ul className="cards__items">
				<CardItem src="images/skull.jpg" path="/services" />
				<CardItem src="../images/skull.jpg" path="/services" />
				<CardItem src="../images/skull.jpg" path="/services" />
			</ul>
		</div>
	);
};

export default Cards;
