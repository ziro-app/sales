import React from 'react'
import AlertSvg from './AlertSvg'
import Spinner from './Spinner/index'
import { row, label, select, error } from './styles'

const Select = ({ uiState, selectValue, updateParentAndSheet, statuses }) => {
	const componentsToRender = {
		default: null,
		submitting: <span><Spinner size={'20px'} />{'Enviando...'}</span>,
		submitted: <span>Status atualizado!</span>,
		error_submitting: <span><AlertSvg size={16} />{'Erro ao enviar. Tente novamente'}</span>
	}
	return (
		<div style={row}>
			<span style={label}>Status</span>
			<select style={select} value={selectValue} onChange={updateParentAndSheet}>
				{statuses.map( (option, index) =>
					<option value={option} key={index}>{option}</option>
				)}
			</select>
			<label style={error}>
				{componentsToRender['error_submitting']}
			</label>
		</div>
	)
}

export default Select