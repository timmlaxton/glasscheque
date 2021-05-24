import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
	return (
		<div className="cards">
			<h1>Check out these epic destinations</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/img-9.jpg" text="Dont go chasing waterfalls" labels="Adventure" path="/services" />
						<CardItem src="images/img-2.jpg" text="Bali is fun" labels="Luxury" path="/services" />
					</ul>
					<ul className="cards__items">
						<CardItem src="images/img-3.jpg" text="Dont go chasing waterfalls" labels="Adventure" path="/services" />
						<CardItem src="images/img-8.jpg" text="Bali is fun" labels="Luxury" path="/services" />
						<CardItem src="images/img-4.jpg" text="Bali is fun" labels="Luxury" path="/services" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
