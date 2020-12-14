import React, { Fragment, useContext, useEffect } from 'react';
import Activities from '../activities/Activities';
import ActivityForm from '../activities/ActivityForm';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	const { user, isAuthenticated } = authContext;

	return isAuthenticated && user ? (
		<Fragment>
			{user.type === 'farmer' ? (
				<div className='container-farmers'>
					<ActivityForm />
					<Activities displayEditAndDelete={true} />
				</div>
			) : (
				<div className='container-scientists'>
					<Activities displayEditAndDelete={false} />
				</div>
			)}
		</Fragment>
	) : null;
};

export default Home;
