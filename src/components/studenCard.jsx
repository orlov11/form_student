import React from 'react'
import { Link } from 'react-router-dom'

const StudentCard = () => {
	const student = JSON.parse(localStorage.getItem('user'))
	console.log(student)

	const chaneWord = params => {
		const word = 2022 - student.burnYear
		if (word >= 5 && word < 20) {
			return `${word} лет`
		} else if ((word % 10 >= 5 && word % 10 <= 9) || word % 10 === 0) {
			return `${word} лет`
		} else if (word % 10 === 1) {
			return `${word} год`
		} else if (word % 10 === 2 || word % 10 === 3 || word % 10 === 4) {
			return `${word} года`
		}
		console.log(word % 10 > 0)
	}

	return (
		<div>
			<h1>Student card</h1>
			{student ? (
				<>
					<h3>Имя: {student.name}</h3>
					<h3>Фамилия: {student.lastName}</h3>
					<h3>
						Год рождения: {student.burnYear} ({chaneWord()})
					</h3>
					<h3>
						Портфолио{' '}
						<a href={student.portfolio} target="blank">
							{student.portfolio}
						</a>
					</h3>
				</>
			) : (
				<h2>Нет данных</h2>
			)}
			<Link to="/addstudent">
				{' '}
				<button className="btn btn-dark">
					{student ? 'Изменить' : 'Создать'}
				</button>
			</Link>
		</div>
	)
}

export default StudentCard
