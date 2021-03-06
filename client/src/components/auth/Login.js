import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const [ user, setUser ] = useState({
		email: '',
		password: ''
	});

	const { setAlert } = alertContext;
	const { loginUser, error, clearErrors, isAuthenticated, type } = authContext;
	useEffect(
		() => {
			if (isAuthenticated) {
				props.history.push('/');
			}
			if (error === 'Invalid Credentials') {
				setAlert(error, 'danger');
				clearErrors();
			}
			/**{
				error &&
					error.length > 0 &&
					error.map((eachErr) => {
						setAlert(eachErr.msg, 'danger');
					});
			}
			clearErrors();*/
			//eslint-disable-next-line
		},
		[ error, isAuthenticated, type, props.history, clearErrors, setAlert ]
	);

	// onChangeHandler to set logged in user
	const onChangeHandler = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	// onSubmitHandler to submit user login credentials and alert
	// if any errors
	// ToDo: Handle errors on delete and set alert
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			loginUser({
				email,
				password
			});
		}
	};
	const { email, password } = user;

	return (
		<div className='form-container'>
			<h1>
				Client <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmitHandler}>
				<div className='form-group'>
					<label htmlFor='email'>Email Address</label>
					<input type='email' name='email' value={email} onChange={onChangeHandler} required />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' value={password} onChange={onChangeHandler} required />
				</div>

				<input type='submit' value='Login' className='btn btn-primary btn-block' />
			</form>
		</div>
	);
};

export default Login;
