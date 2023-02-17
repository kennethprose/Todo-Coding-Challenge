import './App.css'
import { useEffect, useState } from 'react'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { API_BASE_URL } from './config'

function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		const url = API_BASE_URL + '/task/getAllTasks'

		fetch(url)
			.then((response) => response.json())
			.then((data) => setTasks(data))
			.catch((error) => console.log(error))
	}, [])

	function handleDelete(id) {
		const url = API_BASE_URL + '/task/deleteTask'
		const data = { id }

		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then(setTasks((tasks) => tasks.filter((task) => task.id !== id)))
			.catch((error) => console.log(error))
	}

	function handleAddNewTask(description) {
		const url = API_BASE_URL + '/task/create'
		const data = { description }

		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((newTask) => setTasks([...tasks, newTask]))
			.catch((error) => console.log(error))
	}

	return (
		<div className='App'>
			<div className='data-col'>
				<h1 className='title'>Todo List:</h1>
				<AddTask submitNewTask={handleAddNewTask} />
				<br />
				{tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						description={task.description}
						completed={task.completed}
						onDelete={() => handleDelete(task.id)}
					/>
				))}
			</div>
		</div>
	)
}

export default App
