import React from 'react'
import AlertSvg from './AlertSvg'
import { row, label, select, error } from './styles'

const Select = ({ selectValue, updateParentAndSheet, statuses }) =>
	<div style={row}>
		<span style={label}>Status</span>
		<select style={select} value={selectValue} onChange={updateParentAndSheet}>
			{statuses.map( (option, index) =>
				<option value={option} key={index}>{option}</option>
			)}
		</select>
		<label style={error}>
			{'Erro ao enviar. Tente novamente' ? <AlertSvg size={16} /> : null} &nbsp; {'Erro ao enviar. Tente novamente'}
		</label>
	</div>

export default Select