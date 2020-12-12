import React, { useState, useContext, useEffect } from 'react';
import ActivityContext from '../../context/activity/activityContext';
import AlertContext from '../../context/alert/alertContext';

const ActivityForm = () => {
	const activityContext = useContext(ActivityContext);
	const alertContext = useContext(AlertContext);
	const { addActivity, current, clearCurrent, updateActivity } = activityContext;
	const { setAlert } = alertContext;
	useEffect(
		() => {
			if (current) {
				setActivity(current);
			} else {
				setActivity({
					food: '',
					foodQuantity: '',
					country: '',
					foodType: 'veggies',
					numberOfDucks: ''
				});
			}
		},
		[ activityContext, current ]
	); // only want to happen during contactContext and current

	const [ activity, setActivity ] = useState({
		food: '',
		foodQuantity: '',
		country: '',
		foodType: 'veggies',
		numberOfDucks: ''
	});
	const { food, foodQuantity, country, foodType, numberOfDucks } = activity;
	const onChangeHandler = (e) => {
		setActivity({ ...activity, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (!current) {
			addActivity(activity);
			setAlert('Activity added successfully', 'success');
		} else {
			updateActivity(activity);
			setAlert('Activity updated successfully', 'success');
			clearCurrent();
		}
	};

	const clearAll = () => {
		clearCurrent();
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<h2 className='text-primary'> {current ? 'Edit Activity' : 'Add Activity'}</h2>
			<label htmlor='no_of_ducks'>No of Ducks</label>
			<input
				type='text'
				placeholder='i.e., 5'
				name='numberOfDucks'
				value={numberOfDucks}
				onChange={onChangeHandler}
			/>
			<label htmlFor='food'>Food</label>
			<input
				type='text'
				placeholder='i.e., Lettuce, Broccolli, Oats, Wheat'
				name='food'
				value={food}
				onChange={onChangeHandler}
			/>
			<label htmlFor='quantity'>Quantity</label>
			<input
				type='text'
				placeholder='i.e., 5'
				name='foodQuantity'
				value={foodQuantity}
				onChange={onChangeHandler}
			/>
			<label id='=country'>Country</label>
			<input
				type='text'
				placeholder='i.e., CA, US, IND, FR, GE'
				name='country'
				value={country}
				onChange={onChangeHandler}
			/>
			<input
				type='radio'
				name='foodType'
				value='veggies'
				checked={foodType === 'veggies'}
				onChange={onChangeHandler}
			/>
			Veggies {''}
			<input
				type='radio'
				name='foodType'
				value='grains'
				checked={foodType === 'grains'}
				onChange={onChangeHandler}
			/>Grains {''}
			<div>
				<input
					type='submit'
					value={current ? 'Update Activity' : 'Add Activity'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ActivityForm;
