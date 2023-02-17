import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Task.css'
import { API_BASE_URL } from '../config'

function Task(props) {
	const [completed, setCompleted] = useState(props.completed)
	const [description, setDescription] = useState(props.description)

	function handleCheckboxChange() {
		setCompleted(!completed)
		updateCompleted(props.id, !completed)
	}

	function handleDescriptionChange(event) {
		setDescription(event.target.value)
		updateDescription(props.id, event.target.value)
	}

	function updateCompleted(id, completed) {
		const url = API_BASE_URL + '/task/updateCompleted'
		const data = { id, completed }

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.catch((error) => console.log(error))
	}

	function updateDescription(id, description) {
		const url = API_BASE_URL + '/task/updateDescription'
		const data = { id, description }

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.catch((error) => console.log(error))
	}

	return (
		<div className='task-card'>
			<div className='task-content'>
				<input
					className='task-completed'
					type='checkbox'
					checked={completed}
					onChange={handleCheckboxChange}
				/>
				<textarea
					className='task-description'
					value={description}
					onChange={handleDescriptionChange}
				/>
				<button className='task-delete' onClick={props.onDelete}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Task
