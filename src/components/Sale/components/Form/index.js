/* import libraries */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
/* import utils */
import formatDate from '../../utils/formatDate'
import { dayPickerProps } from '../../utils/dayPickerProps'
/* import components */
import FormInput from './FormInput/index'
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import InputForDayPicker from './InputForDayPicker/index'
import Radio from './Radio/index'
import Submit from './Submit/index'
import ErrorMessage from  './ErrorMessage/index'
import SaleSvg from './Radio/icons/SaleSvg'
import ReturnSvg from './Radio/icons/ReturnSvg'
import WifiOnSvg from './Radio/icons/WifiOnSvg'
import WifiOffSvg from './Radio/icons/WifiOffSvg'
/* import styles */
import { body, notAllowed, input } from './styles'

const Form = ({ id, state, updateDropdown, updateDayPicker, updateRadio, submitForm }) => {
	const {
		uiState, status, start_date, error_start_date, representatives, representative,
		error_representative, resellers, reseller, error_reseller, category, error_category,
		type, error_type, end_date, error_end_date
	} = state
	const editing = id
	const editingNotAllowed = status.match(/(Em trânsito)|(Entregue)|(Cancelado)/)
	/*-- rendering --*/
	if (editing && editingNotAllowed)
		return (
			<div style={notAllowed}>
				Esse atendimento foi despachado ou cancelado e não pode mais ser editado
			</div>
		)
	return (
		<div style={body}>
			<FormInput uiState={uiState} errorMessage={error_start_date}
				render={() => {
					if (editing && status !== 'Escolhendo')
						return (
							<input
								style={input}
								placeholder={formatDate(start_date)}
								disabled={true}
							/>
						)
					return (
						<DayPickerInput
							component={InputForDayPicker}
							placeholder='Data início'
							value={start_date}
							onDayChange={updateDayPicker('start_date')}
							formatDate={formatDate}
							dayPickerProps={dayPickerProps}
						/>
					)
				}}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={formatDate(start_date)}
						disabled={true}
					/>
				)}
			/>
			<FormInput uiState={uiState} errorMessage={error_representative}
				render={() => (
					<Dropdown
						name='representative'
						placeholder='Assessor'
						options={representatives}
						value={representative}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={representative}
						disabled={true}
					/>
				)}
			/>
			<FormInput uiState={uiState} errorMessage={error_reseller}
				render={() => (
					<Dropdown
						name='reseller'
						placeholder='Lojista'
						options={resellers}
						value={reseller}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={reseller}
						disabled={true}
					/>
				)}
			/>
			<FormInput uiState={uiState} errorMessage={error_category}
				render={() => (
					<Radio
						name='category'
						options={['Venda','Troca']}
						icons={[<SaleSvg />,<ReturnSvg />]}
						value={category}
						updateParent={updateRadio}
						disabled={false}
					/>
				)}
				renderSubmitting={() => (
					<Radio
						name='category'
						options={['Venda','Troca']}
						icons={[<SaleSvg />,<ReturnSvg />]}
						value={category}
						updateParent={updateRadio}
						disabled={true}
					/>
				)}
			/>
			<FormInput uiState={uiState} errorMessage={error_type}
				render={() => (
					<Radio
						name='type'
						options={['Online','Offline']}
						icons={[<WifiOnSvg />,<WifiOffSvg />]}
						value={type}
						updateParent={updateRadio}
						disabled={false}
					/>
				)}
				renderSubmitting={() => (
					<Radio
						name='category'
						options={['Online','Offline']}
						icons={[<WifiOnSvg />,<WifiOffSvg />]}
						value={type}
						updateParent={updateRadio}
						disabled={true}
					/>
				)}
			/>
			<FormInput uiState={uiState} errorMessage={error_end_date}
				render={() => (
					<DayPickerInput
						component={InputForDayPicker}
						placeholder='Despacho'
						value={end_date}
						onDayChange={updateDayPicker('end_date')}
						formatDate={formatDate}
						dayPickerProps={dayPickerProps}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={formatDate(end_date)}
						disabled={true}
					/>
				)}
			/>
			<Submit
				submitForm={submitForm}
				uiState={uiState}
			/>
		</div>
	)
}

Form.propTypes = {
	id: PropTypes.string,
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateDayPicker: PropTypes.func.isRequired,
	updateRadio: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired
}

export default Form