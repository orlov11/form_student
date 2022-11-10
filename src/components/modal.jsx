import React from 'react'
import { useHistory } from 'react-router-dom'

import './style.css'

const ModalWindow = () => {
	const history = useHistory()
	const handelShowModal = params => {
		history.push('/')
	}
	return (
		<div
			className="modal show d-block background"
			id="exampleModal"
			tabIndex="-1"
			role="dialog"
			aria-hidden="true">
			<div className="modal-dialog" tabIndex="2" role="dialog">
				<div className="modal-content">
					<div className="modal-header"></div>
					<div className="modal-body">
						<p>Обновлено</p>
					</div>
					<div className="modal-footer">
						<button
							onClick={handelShowModal}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalWindow
