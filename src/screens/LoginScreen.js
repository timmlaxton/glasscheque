import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { UseDispatch, UseSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return <div></div>;
};

export default LoginScreen;
