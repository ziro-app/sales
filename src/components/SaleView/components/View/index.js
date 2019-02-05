import React from 'react'
import PropTypes from 'prop-types'
import getSale from '../../utils/getSale'
import Select from './Select/index'
import EditButton from './EditButton/index'
import { container, row, label, data, notFound } from './styles'

const View = ({ uiState, id, sales, statuses, userStatus, updateParentAndSheet }) => {
	const { found, inicio, assessor, lojista, categoria, tipo, despacho, status } = getSale(id, sales)
	const selectValue = userStatus === '' ? status : userStatus
	if (found)
		return (
			<div style={container}>
				<div style={row}>
					<span style={label}>Início</span>
					<span style={data}>{inicio}</span>
				</div>
				<div style={row}>
					<span style={label}>Assessor</span>
					<span style={data}>{assessor}</span>
				</div>
				<div style={row}>
					<span style={label}>Lojista</span>
					<span style={data}>{lojista}</span>
				</div>
				<div style={row}>
					<span style={label}>Categoria</span>
					<span style={data}>{categoria}</span>
				</div>
				<div style={row}>
					<span style={label}>Tipo</span>
					<span style={data}>{tipo}</span>
				</div>
				<div style={row}>
					<span style={label}>Despacho</span>
					<span style={data}>{despacho}</span>
				</div>	
				<Select
					uiState={uiState}
					selectValue={selectValue}
					updateParentAndSheet={updateParentAndSheet}
					statuses={statuses}
					start={inicio}
				/>
				<EditButton status={selectValue} id={id} uiState={uiState} />
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
	updateParentAndSheet: PropTypes.func.isRequired
}

export default View