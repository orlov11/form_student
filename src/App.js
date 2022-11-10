import React from 'react'
import StudentCard from './components/studenCard'
import { Route, Switch } from 'react-router-dom'
import AddStudentCard from './components/addStudentCard'

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={StudentCard} />
				<Route exact path="/addstudent" component={AddStudentCard} />
			</Switch>
		</div>
	)
}

export default App
