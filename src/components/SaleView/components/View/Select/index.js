import React from 'react'
import AlertSvg from './AlertSvg/index'
import Spinner from './Spinner/index'
import { row, label, select, message, submitting, success, error } from './styles'

const Select = ({ uiState, selectValue, updateParentAndSheet, statuses }) => {
	const componentsToRender = {
		default:
			null,
		submitting:
			<span style={submitting}>
				<Spinner size={'25px'} />
				{'Enviando...'}
			</span>,
		submitted:
			<span style={success}>
				Status atualizado!
			</span>,
		error_submitting:
			<span style={error}>
				<AlertSvg size={16} />
				{'Erro ao enviar. Tente novamente'}
			</span>
	}
	return (
		<div style={row}>
			<span style={label}>Status</span>
			<select style={select} value={selectValue} onChange={updateParentAndSheet}>
				{statuses.map( (option, index) =>
					<option value={option} key={index}>{option}</option>
				)}
			</select>
			<label style={message}>
				{componentsToRender[uiState]}
			</label>
		</div>
	)
}

export default Select