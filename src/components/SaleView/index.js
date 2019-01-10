/* import libraries */
import React, { Component } from 'react'
import { CancelToken } from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
/* import methods */
import { initialUiState, changeUiState } from './methods/stateMachine'
import fetchInitialData from './methods/fetchInitialData'
import Header from '../Header/index'
import getSale from './utils/getSale'
import { container, row, label, data, select, link, edit } from './styles'

export default class SaleView extends Component {
	state = {
		uiState: initialUiState,
		sales: [],
		statuses: []
	}
	/*-- methods --*/
	cancelTokenSource = CancelToken.source()
	changeUiState = changeUiState(this)
	fetchInitialData = fetchInitialData(this)
	/*-- lifecycle --*/
	componentDidMount = () => this.fetchInitialData()
	componentWillUnmount = () => this.cancelTokenSource.cancel()
	render() {
		const path = this.props.match.path
		const id = this.props.match.params.id
		const sales = this.props.sales.length === 0 ? this.state.sales : this.props.sales
		const statuses = this.props.statuses.length === 0 ? this.state.statuses : this.props.statuses
		const { inicio, assessor, lojista, categoria, tipo, fim, status } = getSale(id, sales)
		return (
			<Header title={`Atendimento ${id}`} path={path}>
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
						<span style={label}>Fim</span>
						<span style={data}>{fim}</span>
					</div>
					<div style={row}>
						<span style={label}>Status</span>
						<select style={select} value={status}>
							{statuses.map( (option, index) =>
								<option value={option} key={index}>{option}</option>
							)}
						</select>
					</div>
					<Link style={link} to={`/atendimentos/${id}/editar`}>
						<input style={edit} type='submit' value='Editar' />
					</Link>
				</div>
			</Header>
		)
	}
}

SaleView.propTypes = {
	match: PropTypes.object.isRequired,
	sales: PropTypes.array.isRequired,
	statuses: PropTypes.array.isRequired
}