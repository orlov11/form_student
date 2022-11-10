import React, { useState } from 'react'

const TextField = ({ label, name, type, value, onChange, error }) => {
	const [showPassword, setShowPassword] = useState(false)
	const [showLabel, setShowLabel] = useState(false)
	const inputControl = () => {
		return 'form-control mt-2' + (error ? ' is-invalid' : '')
	}
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}

	const togglgeShowPassword = () => {
		setShowPassword(prevState => !prevState)
	}

	const handleFocus = e => {
		setShowLabel(prevState => !prevState)
	}
	return (
		<div className="mb-4">
			{showLabel && <label htmlFor={name}>{label}</label>}
			<div className="input-group has-validation">
				<input
					autoComplete="true"
					placeholder={showLabel ? '' : label}
					id={name}
					type={showPassword ? 'text' : type}
					name={name}
					value={value}
					onChange={handleChange}
					className={inputControl()}
					onFocus={handleFocus}
					onBlur={handleFocus}
				/>
				{type === 'password' && (
					<button
						className="btn btn-outline-secondary"
						type="button"
						onClick={togglgeShowPassword}>
						{showPassword ? (
							<i className="bi bi-eye"></i>
						) : (
							<i className="bi bi-eye-slash"></i>
						)}
					</button>
				)}
				{error && <div className="invalid-feedback">{error}</div>}
			</div>
		</div>
	)
}

export default TextField
