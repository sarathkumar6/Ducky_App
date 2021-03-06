import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, logoutUser, user } = authContext;

	const onLogoutHandler = () => {
		logoutUser();
	};
	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li>
				<a href='#!' onClick={onLogoutHandler}>
					<i className='fas fa-sign-out-alt' />
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon} />
				<span>{title}</span>
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

// Navbar PropTypes to perform prop validation
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

// Navbar props default value
Navbar.defaultProps = {
	title: 'Ducky',
	icon: 'fad fa-duck'
};

export default Navbar;
