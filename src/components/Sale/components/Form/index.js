/* import libraries */
import React from 'react'
import PropTypes from 'prop-types'
/* import utils */
import formatDate from '../../utils/formatDate'
import { dayPickerProps } from '../../utils/dayPickerProps'
import getResellerAddress from '../../utils/getResellerAddress'
/* import components */
import FormInput from './FormInput/index'
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import InputForDayPicker from './InputForDayPicker/index'
import Radio from './Radio/index'
import Time from './Time/index'
import TextArea from './TextArea/index'
import Submit from './Submit/index'
import SaleSvg from './Radio/icons/SaleSvg'
import ReturnSvg from './Radio/icons/ReturnSvg'
import WifiOnSvg from './Radio/icons/WifiOnSvg'
import WifiOffSvg from './Radio/icons/WifiOffSvg'
/* import styles */
import { body, notAllowed, input, subtitle, inputTime } from './styles'

const Form = ({
		id, state, updateDropdown, updateDayPicker, updateRadio, updateTime, updateComments, submitForm
	}) => {
	const {
		uiState, status, start_date, error_start_date, representatives, representative,
		error_representative, resellers, reseller, error_reseller, category, error_category,
		type, error_type, end_date, error_end_date, time, error_time, shipping_options,
		shipping, error_shipping, packaging_options, packaging, error_packaging, addresses,
		address, error_address, invoice_options, invoice, error_invoice, comments, error_comments
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
		{/*---------------------------START_DATE-------------------------*/}
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
		{/*---------------------------REPRESENTATIVE-------------------------*/}
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
		{/*---------------------------RESSELER-------------------------*/}
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
		{/*---------------------------CATEGORY-------------------------*/}	
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
		{/*---------------------------TYPE-------------------------*/}	
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
		{/*---------------------------END_DATE-------------------------*/}	
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
			<div style={subtitle}>Complemento despacho</div>
		{/*---------------------------TIME-------------------------*/}	
			<FormInput uiState={uiState} errorMessage={error_time}
				render={() => (
					<Time
						value={time}
						updateParent={updateTime}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={inputTime}
						type='text'
						placeholder={time}
						disabled={true}
					/>
				)}
			/>
		{/*---------------------------SHIPPING-------------------------*/}	
			<FormInput uiState={uiState} errorMessage={error_shipping}
				render={() => (
					<Dropdown
						name='shipping'
						placeholder='Transporte'
						options={shipping_options}
						value={shipping}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={shipping}
						disabled={true}
					/>
				)}
			/>
		{/*---------------------------ADDRESS-------------------------*/}	
			<FormInput uiState={uiState} errorMessage={error_address}
				render={() => (
					<Dropdown
						name='address'
						placeholder='Endereço'
						options={getResellerAddress(addresses, reseller)}
						value={address}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={address}
						disabled={true}
					/>
				)}
			/>
		{/*---------------------------PACKAGING-------------------------*/}	
			<FormInput uiState={uiState} errorMessage={error_packaging}
				render={() => (
					<Dropdown
						name='packaging'
						placeholder='Fardo'
						options={packaging_options}
						value={packaging}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={packaging}
						disabled={true}
					/>
				)}
			/>
		{/*---------------------------INVOICE-------------------------*/}	
			<FormInput uiState={uiState} errorMessage={error_invoice}
				render={() => (
					<Dropdown
						name='invoice'
						placeholder='Nota'
						options={invoice_options}
						value={invoice}
						updateParent={updateDropdown}
					/>
				)}
				renderSubmitting={() => (
					<input
						style={input}
						placeholder={invoice}
						disabled={true}
					/>
				)}
			/>
		{/*---------------------------COMMENTS-------------------------*/}	
			<FormInput uiState={uiState} errorMessage={error_comments}
				render={() => (
					<TextArea
						value={comments}
						updateParent={updateComments}
					/>
				)}
				renderSubmitting={() => (
					<textarea
						style={input}
						placeholder={comments}
						disabled={true}
					/>
				)}
			/>
			<Submit submitForm={submitForm} uiState={uiState} />
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