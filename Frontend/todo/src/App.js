import './App.css'
import { useEffect, useState } from 'react'
import Task from './components/Task'

function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		fetch('http://localhost:8080/task/getAllTasks')
			.then((response) => response.json())
			.then((data) => setTasks(data))
			.catch((error) => console.log(error))
	}, [])

	function handleDelete(id) {
		fetch('http://localhost:8080/task/deleteTask', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: id }),
		})
			.then((response) => response.json())
			.then(setTasks((tasks) => tasks.filter((task) => task.id !== id)))
			.catch((error) => console.log(error))
	}

	return (
		<div className='App'>
			<div className='data-col'>
				<h1 className='title'>Todo List:</h1>
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
