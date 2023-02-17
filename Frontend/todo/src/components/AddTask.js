import '../styles/AddTask.css'
import { useState } from 'react'

function AddTask(props) {
	const [description, setDescription] = useState('')

	function handleDescriptionChange(event) {
		setDescription(event.target.value)
	}

	function handleSubmit() {
		props.submitNewTask(description)
		setDescription('')
	}

	return (
		<div className='add-task-card'>
			<div className='add-task-content'>
				<h1 className='add-task-title'>New Todo:</h1>
				<textarea
					className='add-task-description'
					value={description}
					onChange={handleDescriptionChange}
				/>
				<button className='submit-task-button' onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	)
}

export default AddTask
