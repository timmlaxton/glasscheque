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
						Pivo
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
							<Link to="/spirits" className="nav-links" onClick={closedMobilemenu}>
								Spirits
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/beer" className="nav-links" onClick={closedMobilemenu}>
								Beer
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/wine" className="nav-links" onClick={closedMobilemenu}>
								Wine
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
