import React from 'react'
import PropTypes from 'prop-types'
import getSale from '../../utils/getSale'
import Select from './Select/index'
import EditButton from './EditButton/index'
import { container, row, label, data, notFound } from './styles'

const View = ({ uiState, id, sales, statuses, userStatus, updateParentAndSheet, forceReloadAfterEdit }) => {
	const { found, saleData, status } = getSale(id, sales)
	const inicio = saleData[0].value
	const selectValue = userStatus === '' ? status : userStatus
	if (found)
		return (
			<div style={container}>
				{saleData.map( ({ value, name }) => (
					<div style={row} key={name}>
						<span style={label}>{name}</span>
						<span style={data}>{value}</span>
					</div>
				))}
				<Select
					uiState={uiState}
					selectValue={selectValue}
					updateParentAndSheet={updateParentAndSheet}
					statuses={statuses}
					start={inicio}
				/>
				<EditButton
					status={selectValue}
					id={id}
					uiState={uiState}
					forceReloadAfterEdit={forceReloadAfterEdit}
				/>
			</div>
		)
	return <div style={notFound}>Atendimento não existe na base</div>
}

View.propTypes = {
	uiState: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	sales: PropTypes.array.isRequired,
	statuses: PropTypes.array.isRequired,
	userStatus: PropTypes.string.isRequired,
	updateParentAndSheet: PropTypes.func.isRequired,
	forceReloadAfterEdit: PropTypes.func.isRequired
}

export default View