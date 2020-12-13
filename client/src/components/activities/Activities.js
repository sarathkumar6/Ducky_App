import React, { Fragment, useContext, useEffect } from 'react';
import ActivityContext from '../../context/activity/activityContext';
import ActivityItem from './ActivityItem';

const Activities = ({ displayEditAndDelete }) => {
	const activityContext = useContext(ActivityContext);
	const { activities, getActivities } = activityContext;

	useEffect(() => {
		getActivities();
		//eslint-disable-next-line
	}, []);

	if (!activities) {
		return <h4>Pleae add an activity</h4>;
	} else {
		return (
			<div className='activities-container'>
				{activities.map((activity) => (
					<ActivityItem
						key={activity._id}
						clientName={activity.clientName}
						food={activity.food}
						foodQuantity={activity.foodQuantity}
						id={activity._id}
						foodType={activity.foodType}
						country={activity.country}
						date={activity.date}
						numberOfDucks={activity.numberOfDucks}
						displayEditAndDelete={displayEditAndDelete}
					/>
				))}
			</div>
		);
	}
};
export default Activities;
