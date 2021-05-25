import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
	return (
		<>
			<li className="cards__item">
				<figure className="cards__item__pic-wrap" data-category={props.labels}>
					<img src={props.src} alt="Travel" className="cards__item__img" />
				</figure>
			</li>
		</>
	);
};

export default CardItem;
