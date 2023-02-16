import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Task.css'

function Task(props) {
	const [completed, setCompleted] = useState(props.completed)
	const [description, setDescription] = useState(props.description)

	function handleCheckboxChange() {
		const newCompleted = !completed
		setCompleted(newCompleted)
		updateCompleted(props.id, newCompleted)
	}

	function handleDescriptionChange(event) {
		setDescription(event.target.value)
	}

	function updateCompleted(id, completed) {
		const url = 'http://localhost:8080/task/updateCompleted'
		const data = { id, completed }

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
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
