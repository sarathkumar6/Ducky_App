import React from 'react';
import ActivityItem from '../../../src/components/activities/ActivityItem';
import renderer from 'react-test-renderer';

test('Activity Item renders initially', () => {
	const activity = {
		clientName: 'John Smith',
		food: 'Oats',
		foodQuantity: 6,
		id: '12345',
		foodType: 'veggies',
		country: 'UK',
		date: '',
		numberOfDucks: 12,
		displayEditAndDelete: false
	};
	const activityItemComponent = renderer.create(<ActivityItem {...activity} />);
	console.log(activityItemComponent);
	expect(activityItemComponent.toJSON()).toMatchSnapShot();
});
