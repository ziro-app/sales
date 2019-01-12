import React from 'react'
import { select } from './styles'

const Select = ({ selectValue, updateParentAndSheet, statuses }) =>
		<select style={select} value={selectValue} onChange={updateParentAndSheet}>
			{statuses.map( (option, index) =>
				<option value={option} key={index}>{option}</option>
			)}
		</select>

export default Select