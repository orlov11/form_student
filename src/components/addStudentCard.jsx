import React, { useState, useEffect } from 'react'
import TextField from './textField'
import ModalWindow from './modal'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

const AddStudentCard = () => {
	const history = useHistory()
	const [student, setStudent] = useState()
	const [data, setData] = useState({
		name: '',
		lastName: '',
		burnYear: '',
		portfolio: ''
	})
	const [showModal, setShowModal] = useState(false)
	const [errors, setErrors] = useState({})

	useEffect(() => {
		localStorage.length > 0 &&
			setData(JSON.parse(localStorage.getItem('user')))
	}, [])
	useEffect(() => {
		setStudent(localStorage.length)
	}, [])

	useEffect(() => {
		validate()
	}, [data])

	let validateShema = yup.object().shape({
		portfolio: yup
			.string()
			.required('Портфолио обязательно для заполнения')
			.url('Портфолио должно быть ссылкой'),

		burnYear: yup
			.string()
			.required('Возраст обязателен для заполнения')
			.min(4, 'Введен не корректный год')
			.test('isCorrect', 'Введен не корректный год', value =>
				Promise.resolve(value < 2022)
			)
			.test('isCorrect', 'Введен не корректный год', value =>
				Promise.resolve(value > 1906)
			),

		lastName: yup
			.string()
			.required('Фамилия обязательно для заполнения')
			.matches(/\D+/g, 'Фамилия не может быть цифрой'),
		name: yup
			.string()
			.required('Имя обязательно для заполнения')
			.matches(/\D+/g, 'Имя не может быть цифрой')
	})

	const validate = () => {
		validateShema
			.validate(data)
			.then(() => setErrors({}))
			.catch(err => setErrors({ [err.path]: err.errors }))
		return Object.keys(errors).length === 0
	}

	const handleChange = target => {
		setData(prevState => ({ ...prevState, [target.name]: target.value }))
	}

	const handelBack = params => {
		history.push('/')
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log(data)
		setShowModal(prevState => !prevState)
		localStorage.setItem('user', JSON.stringify(data))
	}
	const isValid = Object.keys(errors).length === 0
	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6 offset-md-3 shadow p-4">
						{showModal && <ModalWindow />}
						<form onSubmit={handleSubmit}>
							<TextField
								label="Имя"
								name="name"
								type="text"
								value={data.name}
								onChange={handleChange}
								error={errors.name}
							/>
							<TextField
								label="Фамилия"
								name="lastName"
								type="text"
								value={data.lastName}
								onChange={handleChange}
								error={errors.lastName}
							/>
							<TextField
								label="Год рождения"
								name="burnYear"
								type="number"
								value={data.burnYear}
								onChange={handleChange}
								error={errors.burnYear}
							/>
							<TextField
								label="Портфолио"
								name="portfolio"
								type="url"
								value={data.portfolio}
								onChange={handleChange}
								error={errors.portfolio}
							/>

							<button disabled={!isValid} className="btn btn-dark">
								{student > 0 ? 'Обновить' : 'Создать'}
							</button>
							{student > 0 && (
								<button
									disabled={!isValid}
									type="button"
									onClick={handelBack}
									className="btn btn-primary m-3">
									Назад
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddStudentCard
