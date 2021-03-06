import React from 'react'
import Header from '../../Header/index'
import Form from '../components/Form/index'
import Spinner from '../../Spinner/index'
import ErrorOnFetch from '../../ErrorOnFetch/index'

const renderForm = that => uiState => {
	const id = that.props.match.params.id
	const path = that.props.location.pathname
	/* define which component the UI will display based on the current state */
	const componentsToRender = {
		default:
			<Form
				id={id}
				state={that.state}
				updateDropdown={that.updateDropdown}
				updateDayPicker={that.updateDayPicker}
				updateRadio={that.updateRadio}
				updateTime={that.updateTime}
				updateComments={that.updateComments}
				submitForm={that.submitForm}
			/>,
		fetching:
			<Spinner size={'8rem'} />,
		error_fetching:
			<ErrorOnFetch />
	}
	/* make sure uiState does not fall out of the available options */
	const ui = uiState !== 'fetching' && uiState !== 'error_fetching' ? 'default' : uiState
	/* return component wrapped in Header */
	if (id)
		return (
			<Header title={`Editar atendimento ${id}`} path={path} backRoute={`/atendimentos/${id}`}>
				{componentsToRender[ui]}
			</Header>
		)
	return (
		<Header title='Cadastrar atendimento' path={path} backRoute={'/'}>
			{componentsToRender[ui]}
		</Header>
	)
}

export default renderForm