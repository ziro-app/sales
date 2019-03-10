import React, { Component } from 'react'
import PropTypes from 'prop-types'
import filterSale from '../../utils/filterSale'
import Select from './Select/index'
import EditButton from './EditButton/index'
import { container, row, label, data, notFound } from './styles'

export default class View extends Component {
	state = {
		found: false,
		saleData: [],
		status: ''
	}
	componentDidMount = () => {
		const { id, sales, logistics, updateIsComplete } = this.props
		this.setState(filterSale(id, sales, logistics, updateIsComplete))
	}
	render = () => {
		const { uiState, id, statuses, userStatus, updateParentAndSheet, forceReloadAfterEdit,
			errorIsComplete } = this.props
		const { found, saleData, status } = this.state
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
						start={saleData[0].value}
						errorIsComplete={errorIsComplete}
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
}

View.propTypes = {
	uiState: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	sales: PropTypes.array.isRequired,
	statuses: PropTypes.array.isRequired,
	pickedup: PropTypes.array.isRequired,
	droppedoff: PropTypes.array.isRequired,
	tracking: PropTypes.array.isRequired,
	userStatus: PropTypes.string.isRequired,
	updateParentAndSheet: PropTypes.func.isRequired,
	forceReloadAfterEdit: PropTypes.func.isRequired,
	errorIsComplete: PropTypes.string.isRequired,
	updateIsComplete: PropTypes.func.isRequired,
}