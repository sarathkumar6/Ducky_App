import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ActivityContext from '../../context/activity/activityContext';
import AlerContext from '../../context/alert/alertContext';

const ActivityItem = ({
	id,
	clientName,
	food,
	foodQuantity,
	foodType,
	numberOfDucks,
	country,
	date,
	displayEditAndDelete
}) => {
	const activityContext = useContext(ActivityContext);
	const { setAlert } = useContext(AlerContext);
	const { deleteActivity, setCurrent, clearCurrent } = activityContext;

	// onDeleteHandler to delete an activity
	// ToDo: Handle errors on delete and set alert
	const onDeleteHandler = () => {
		deleteActivity(id);
		setAlert('Activity deleted successfully', 'success');
		clearCurrent();
	};

	// onEditHandler sets the activity to be edited on the form
	const onEditHandler = () => {
		setCurrent({ id, clientName, food, foodQuantity, foodType, numberOfDucks, date, country });
	};

	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{clientName} <i className='fas fa-globe' /> {country}
				<span
					style={{ float: 'right' }}
					className={'badge ' + (foodType === 'veggies' ? 'badge-success' : 'badge-primary')}>
					{foodType && foodType.charAt(0).toUpperCase() + foodType.slice(1)}
				</span>
			</h3>
			<ul className='list'>
				{numberOfDucks && (
					<li>
						<i className='fad fa-duck' /> {`${numberOfDucks}`}
					</li>
				)}
				{food && (
					<li>
						<i className='far fa-bread-slice' /> {food && food.charAt(0).toUpperCase() + food.slice(1)}
					</li>
				)}
				{foodQuantity && (
					<li>
						<i className='fas fa-weight' /> {`${foodQuantity} lb`}
					</li>
				)}
				{date && (
					<li>
						<i className='far fa-calendar-week' /> {moment(date).format('MMM Do YYYY, h:mm:ss A')}
					</li>
				)}
			</ul>
			{displayEditAndDelete && (
				<p>
					<button className='btn btn-dark btn-sm' onClick={onEditHandler}>
						Edit
					</button>
					<button className='btn btn-danger btn-sm' onClick={onDeleteHandler}>
						Delete
					</button>
				</p>
			)}
		</div>
	);
};

ActivityItem.propTypes = {
	id: PropTypes.string.isRequired,
	clientName: PropTypes.string.isRequired,
	food: PropTypes.string.isRequired,
	foodQuantity: PropTypes.number.isRequired,
	foodType: PropTypes.string.isRequired
};

export default ActivityItem;
