import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
	const cartQuantity = useSelector((state) => state.cart.cartItems?.reduce((acc, item) => acc + item.qty, 0) || 0);
	return (
		<header>
			<Navbar className="top-nav">
				Call us: 0141 333 2909
				<Nav className="ml-auto">
					<LinkContainer to="/cart">
						<Nav.Link>
							<i className="fas fa-shopping-bag"></i>
							<div className="item-tally"> {cartQuantity} </div>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/login">
						<Nav.Link>Sign In</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Swally</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<LinkContainer to="/beer">
								<Nav.Link>Beers</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/spirits">
								<Nav.Link>Spirits</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/wines">
								<Nav.Link>Wines</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/whiskey">
								<Nav.Link>Whiskey</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
