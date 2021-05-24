import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div className="hero-container">
			<video src="/images/shaker.jpg" autoPlay loop muted />
			<h1>Adventure awaits</h1>
			<p>What are you waiting for</p>
			<div className="hero-btn">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					Get Started
				</Button>
				<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
					Watch trailer
					<i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
