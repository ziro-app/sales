import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getSale from '../../utils/getSale'
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
		const { id, sales, updateIsComplete } = this.props
		this.setState(getSale(id, sales, updateIsComplete))
	}
	render = () => {
		const { uiState, id, sales, statuses, userStatus, updateParentAndSheet, forceReloadAfterEdit,
			saleIsComplete, errorIsComplete, updateIsComplete } = this.props
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
						saleIsComplete={saleIsComplete}
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
	userStatus: PropTypes.string.isRequired,
	updateParentAndSheet: PropTypes.func.isRequired,
	forceReloadAfterEdit: PropTypes.func.isRequired,
	saleIsComplete: PropTypes.bool.isRequired,
	errorIsComplete: PropTypes.string.isRequired,
	updateIsComplete: PropTypes.func.isRequired,
}