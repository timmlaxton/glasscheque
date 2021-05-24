import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closedMobilemenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closedMobilemenu}>
						Doon The Water
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closedMobilemenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-links" onClick={closedMobilemenu}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-links" onClick={closedMobilemenu}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className="nav-links" onClick={closedMobilemenu}>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle="btn--outline">Sign Up</Button>}
				</div>
			</nav>
		</>
	);
};

export default Header;
