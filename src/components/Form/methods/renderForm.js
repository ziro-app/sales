import React from 'react'
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
	return componentsToRender[uiState]	
} 
	

export default renderForm