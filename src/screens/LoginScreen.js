import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login, register } from '../actions/userActions';
import './LoginScreen.css';

const LoginScreen = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const userRegister = useSelector((state) => state.userRegister);
	const { loading: loadingRegister, error: errorRegister, userInfo: userInfoRegister } = userRegister;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		} else {
			if (userInfo) {
				history.push(redirect);
			}
		}
	}, [history, userInfoRegister, userInfo, redirect]);

	const signupHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (registerPassword !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(name, registerEmail, registerPassword));
		}
	};

	return (
		<>
			<div className="login-form">
				<h1>Log In</h1>
				{error && <Message variant="danger">{error}</Message>}
				{loading && <Loader />}
				<Form onSubmit={signupHandler}>
					<Form.Group controlId="loginemail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Password </Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Button type="submit" variant="primary">
						Sign In
					</Button>
				</Form>

				<Row className="py-2">
					<Col>
						No Account? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
					</Col>
				</Row>
			</div>

			<div className="register-form">
				<h1>Register</h1>
				{message && <Message variant="danger">{message}</Message>}
				{errorRegister && <Message variant="danger">{errorRegister}</Message>}
				{loadingRegister && <Loader />}
				<Form onSubmit={submitHandler}>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="name"
							placeholder="Enter name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="registeremail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email"
							value={registerEmail}
							onChange={(e) => setRegisterEmail(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="registerpassword">
						<Form.Label>Enter Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter password"
							value={registerPassword}
							onChange={(e) => setRegisterPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="confirmPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Register
					</Button>
				</Form>
			</div>
		</>
	);
};

export default LoginScreen;
