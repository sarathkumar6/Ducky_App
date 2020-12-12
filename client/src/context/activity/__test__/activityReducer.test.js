import activityReducer from '../activityReducer';

test('should return updated state with activities on GET_ACTIVITIES', () => {
	const state = {
		activities: [],
		current: null,
		error: null,
		loading: false
	};
	const action = {
		type: 'GET_ACTIVITIES',
		payload: [
			{
				client: '5fcd572896930720f8a59e2a',
				clientName: 'David Smith',
				country: 'SG',
				date: '2020-12-12T16:44:31.126Z',
				food: 'Wheat',
				foodQuantity: 4,
				foodType: 'grains',
				numberOfDucks: 9
			},
			{
				client: '5fcd572896930720f8a59e2a',
				clientName: 'David Smith',
				country: 'NZ',
				date: '2020-12-07T23:39:36.836Z',
				food: 'Lettuce',
				foodQuantity: 10,
				foodType: 'veggies',
				numberOfDucks: 14
			}
		]
	};
	expect(state.activities.length).toBe(0);
	expect(activityReducer(state, action).activities.length).toBe(2);
});

test('should return updated state state with the activity updated on UPDATE_ACTIVITY', () => {
	const state = {
		activities: [
			{
				client: '5fcd572896930720f8a59e2a',
				clientName: 'David Smith',
				country: 'SG',
				date: '2020-12-12T16:44:31.126Z',
				food: 'Wheat',
				foodQuantity: 4,
				foodType: 'grains',
				numberOfDucks: 9
			},
			{
				client: '5fcd572896930720f8a59e2a',
				clientName: 'David Smith',
				country: 'NZ',
				date: '2020-12-07T23:39:36.836Z',
				food: 'Lettuce',
				foodQuantity: 10,
				foodType: 'veggies',
				numberOfDucks: 14
			}
		],
		current: null,
		error: null,
		loading: false
	};
	const action = {
		type: 'UPDATE_ACTIVITY',
		payload: {
			client: '5fcd572896930720f8a59e2a',
			clientName: 'David Smith',
			country: 'UK',
			date: '2020-12-12T16:44:31.126Z',
			food: 'Wheat',
			foodQuantity: 5,
			foodType: 'grains',
			numberOfDucks: 10
		}
	};
	// Before update
	expect(state.activities[0].foodQuantity).toBe(4);
	expect(state.activities[0].numberOfDucks).toBe(9);

	// After update
	const updatedState = activityReducer(state, action).activities;
	expect(updatedState[0].foodQuantity).toBe(5);
	expect(updatedState[0].numberOfDucks).toBe(10);
});

test('should return updated state state after deleting the activity on DELETE_ACTIVITY', () => {
	const state = {
		activities: [
			{
				client: '5fcd572896930720f8a59e2a',
				clientName: 'David Smith',
				country: 'SG',
				date: '2020-12-12T16:44:31.126Z',
				food: 'Wheat',
				foodQuantity: 4,
				foodType: 'grains',
				numberOfDucks: 9,
				_id: '5fcebdd77264a3826d6f9f46'
			},
			{
				client: '5fcd572896930720f8a59e2a',
				clientName: 'David Smith',
				country: 'NZ',
				date: '2020-12-07T23:39:36.836Z',
				food: 'Lettuce',
				foodQuantity: 10,
				foodType: 'veggies',
				numberOfDucks: 14,
				_id: '5fd4f3e5e57b5bf6725368a8'
			}
		],
		current: null,
		error: null,
		loading: false
	};
	const action = {
		type: 'DELETE_ACTIVITY',
		payload: '5fcebdd77264a3826d6f9f46'
	};
	// Before delete
	expect(state.activities.length).toBe(2);

	// After delete
	const updatedState = activityReducer(state, action).activities;
	expect(updatedState.length).toBe(1);
});
