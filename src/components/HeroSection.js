import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div className="hero-container">
			<video src="/images/beers.jpg" autoPlay loop muted />
			<h1>Adventure awaits</h1>
			<p>What are you waiting for</p>
		</div>
	);
};

export default HeroSection;
