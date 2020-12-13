import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home';
import PrivateRoute from './components/routing/PrivateRoute';
import ActivityState from './context/activity/ActivityState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

// Set Auth token to local storage and use the token to validate/authenticate
// the REST API requests against Clients documents
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ActivityState>
				<AlertState>
					<Router>
						<Fragment>
							<Navbar />
							<Alerts />
							<Switch>
								<PrivateRoute exact path='/' component={Home} exact />
								<Route exact path='/login' component={Login} exact />
								<Route exact path='/register' component={Register} exact />
							</Switch>
						</Fragment>
					</Router>
				</AlertState>
			</ActivityState>
		</AuthState>
	);
};

export default App;
