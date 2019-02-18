import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AlertSvg from './AlertSvg/index'
import Spinner from './Spinner/index'
import compareDateToNow from './compareDateToNow'
import { row, label, data, select, selectSubmit, message, submitting, success, error } from './styles'

const Select = ({ uiState, selectValue, updateParentAndSheet, statuses, start, errorIsComplete }) => {
	const saleIsScheduled = compareDateToNow(start)
	const messages = {
		submitting:
			<span style={submitting}><Spinner size={'25px'} />{'Enviando...'}</span>,
		submitted:
			<span style={success}>{'Status atualizado!'}</span>,
		error_submitting:
			<span style={error}><AlertSvg size={16} />{'Erro ao enviar'}</span>,
		error_status:
			<span style={error}><AlertSvg size={16} />{errorIsComplete}</span>
	}
	const selectStatus = selectValue.match(/(Em trânsito)|(Entregue)|(Cancelado)/g) && uiState !== 'submitting'
		? 'disabled'
		: 'enabled'
	const inputToRender = {
		scheduled:
			<span style={data}>Agendado</span>,
		disabled:
			<span style={data}>{selectValue}</span>,
		enabled:
			<Fragment>
				<select
					style={uiState === 'submitting' ? selectSubmit : select}
					value={selectValue}
					onChange={updateParentAndSheet}
					disabled={uiState === 'submitting'}
				>
					{statuses.map( (option, index) =>
						<option value={option} key={index}>{option}</option>
					)}
				</select>
				<label style={message}>
					{errorIsComplete ? messages['error_status'] : messages[uiState]}
				</label>
			</Fragment>			
	}
	return (
		<div style={row}>
			<span style={label}>Status</span>
			{saleIsScheduled ? inputToRender['scheduled'] : inputToRender[selectStatus]}
		</div>
	)
}

Select.propTypes = {
	uiState: PropTypes.string.isRequired,
	selectValue: PropTypes.string.isRequired,
	updateParentAndSheet: PropTypes.func.isRequired,
	statuses: PropTypes.array.isRequired,
	start: PropTypes.string.isRequired,
	errorIsComplete: PropTypes.string.isRequired
}

export default Select