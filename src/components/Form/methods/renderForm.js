import React from 'react'
import Header from '../components/Header/index'
import FormBody from '../components/FormBody/index'
import Spinner from '../components/Spinner/index'
import ErrorOnLoad from '../components/ErrorOnLoad/index'

const renderForm = that => uiState => {
	const componentsToRender = {
		idle: <FormBody
			state={that.state}
			updateDropdown={that.updateDropdown}
			updateDayPicker={that.updateDayPicker}
			updateRadio={that.updateRadio}
			submitForm={that.submitForm}
		/>,
		fetching: <Spinner />,
		error: <ErrorOnLoad />
	}
	return <Header>componentsToRender[uiState]</Header>
} 
	

export default renderForm