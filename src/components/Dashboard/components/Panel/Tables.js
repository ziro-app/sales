import React from 'react'
import Proptypes from 'prop-types'
import { open } from './utils/filters'
import { row, reseller } from './styles'

const Tables = ({ sales, status }) => {
	return (open(sales).map( ({ id, fim, assessor, lojista }) =>
		<div style={row} key={id}>
			<span>{fim}</span>
			<span>{assessor}</span>
			<span style={reseller}>{lojista}</span>
		</div>
	))
}

Tables.propTypes = {
	sales: Proptypes.array.isRequired,
	status: Proptypes.string.isRequired
}

export default Tables