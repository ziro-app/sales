import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { link, edit, submitting } from './styles'

export default class EditButton extends Component {
	state = {
		hideButton: this.props.status.match(/(Em trânsito)|(Entregue)|(Cancelado)/)
	}
	handleClick = () => {
		if (this.props.uiState === 'submitted')
			this.props.forceReloadAfterEdit()
	}
	componentDidUpdate = () => {
		const nonEditableStatus = this.props.status.match(/(Em trânsito)|(Entregue)|(Cancelado)/)
		const uiStateIsSubmitted = this.props.uiState === 'submitted'
		const hideButton = this.state.hideButton
		if (uiStateIsSubmitted && nonEditableStatus && !hideButton)
			this.setState({ hideButton: true })
		if (uiStateIsSubmitted && !nonEditableStatus && hideButton)
			this.setState({ hideButton: false })
	}
	render = () => {
		const id = this.props.id
		const hideButton = this.state.hideButton
		const uiState = this.props.uiState
		return (
			<Fragment>
				{hideButton
				?
					null
				:
					uiState === 'submitting'
					?
						<input style={submitting} type='submit' value='Editar' />
					:
						<Link style={link} to={`/atendimentos/${id}/editar`} onClick={this.handleClick}>
							<input style={edit} type='submit' value='Editar' />
						</Link>
				}
			</Fragment>
		)
	}
}

EditButton.propTypes = {
	status: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	uiState: PropTypes.string.isRequired,
	forceReloadAfterEdit: PropTypes.func.isRequired
}