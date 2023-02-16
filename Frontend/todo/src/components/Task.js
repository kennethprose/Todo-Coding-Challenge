import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Task.css'

function Task(props) {
	const [completed, setCompleted] = useState(props.completed)
	const [description, setDescription] = useState(props.description)

	function handleCheckboxChange() {
		setCompleted(!completed)

		const data = {
			id: props.id,
			completed: !completed,
		}

		fetch('http://localhost:8080/task/updateCompleted', {
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

	function handleDescriptionChange(event) {
		setDescription(event.target.value)
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
			</div>
		</div>
	)
}

export default Task
