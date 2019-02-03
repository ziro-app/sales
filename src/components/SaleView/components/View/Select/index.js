import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AlertSvg from './AlertSvg/index'
import Spinner from './Spinner/index'
import compareDateToNow from '../../../utils/compareDateToNow'
import { row, label, data, select, selectSubmit, message, submitting, success, error } from './styles'

const Select = ({ uiState, selectValue, updateParentAndSheet, statuses, start }) => {
	const saleIsScheduled = compareDateToNow(start)
	const messages = {
		default:
			null,
		submitting:
			<span style={submitting}><Spinner size={'25px'} />{'Enviando...'}</span>,
		submitted:
			<span style={success}>{'Status atualizado!'}</span>,
		error_submitting:
			<span style={error}><AlertSvg size={16} />{'Erro ao enviar'}</span>
	}
	return (
		<div style={row}>
			<span style={label}>Status</span>
			{saleIsScheduled
				?
					<span style={data}>Agendado</span>
				:
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
							{messages[uiState]}
						</label>
					</Fragment>
			}
		</div>
	)
}

Select.propTypes = {
	uiState: PropTypes.string.isRequired,
	selectValue: PropTypes.string.isRequired,
	updateParentAndSheet: PropTypes.func.isRequired,
	statuses: PropTypes.array.isRequired,
	start: PropTypes.string.isRequired
}

export default Select