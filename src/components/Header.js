import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

import './Header.css';

const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

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
					{userInfo ? (
						<NavDropdown title={userInfo.name} id="username">
							<LinkContainer to="/profile">
								<NavDropdown.Item>Profile</NavDropdown.Item>
							</LinkContainer>

							<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
						</NavDropdown>
					) : (
						<LinkContainer to="/login">
							<Nav.Link>
								<i className="fas fa-user"></i>Sign In
							</Nav.Link>
						</LinkContainer>
					)}
					{userInfo && userInfo.isAdmin && (
						<NavDropdown title="Admin" id="adminmenu">
							<LinkContainer to="/admin/userlist">
								<NavDropdown.Item>Users</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/admin/productlist">
								<NavDropdown.Item>Products</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/admin/orderlist">
								<NavDropdown.Item>Orders</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					)}
				</Nav>
			</Navbar>
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Swally</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<LinkContainer to="/beer">
								<Nav.Link className="nav-links">Beers</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/spirits">
								<Nav.Link className="nav-links">Spirits</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/wines">
								<Nav.Link className="nav-links">Wines</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/whiskey">
								<Nav.Link className="nav-links">Whiskey</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
