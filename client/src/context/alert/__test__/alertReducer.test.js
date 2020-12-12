import alertReducer from '../alertReducer';

test('should return default state when no action type matches', () => {
	const defaultAlert = {
		type: 'NO_ALERT'
	};
	const defaultState = [];
	expect(alertReducer(defaultState, defaultAlert).length).toBe(0);
});

test('should return updated state with the payload when action matches', () => {
	const setAlertAction = {
		type: 'SET_ALERT',
		payload: {
			msg: 'Invalid Credentials',
			type: 'danger',
			id: '78bbecf1-2819-4ec1-a83c-f67fbf400664'
		}
	};
	const removeAlertAction = {
		type: 'REMOVE_ALERT',
		payload: '78bbecf1-2819-4ec1-a83c-f67fbf400664'
	};
	let defaultState = [];
	expect(defaultState.length).toBe(0);

	defaultState = alertReducer([], setAlertAction);
	expect(defaultState.length).toBe(1);
	const finalState = alertReducer(defaultState, removeAlertAction);
	expect(alertReducer(defaultState, removeAlertAction).length).toBe(0);
});
