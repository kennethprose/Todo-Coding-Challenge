import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Task.css'

function Task(props) {
	const [completed, setCompleted] = useState(props.completed)

	function handleCheckboxChange() {
		setCompleted(!completed)
	}

	/*
	const [dueDate, setDueDate] = useState(props.dueDate)

	const handleDateChange = (date) => {
		setDueDate(date)
		const dateString = date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})

		console.log(dateString)
	}
    */

	const [description, setDescription] = useState(props.description)

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
