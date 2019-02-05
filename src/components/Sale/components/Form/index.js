/* import libraries */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
/* import utils */
import formatDate from '../../utils/formatDate'
import { dayPickerProps } from '../../utils/dayPickerProps'
/* import components */
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

const Form = ({ id, state, updateDropdown, updateDayPicker, updateRadio, submitForm }) =>
	<div style={body}>
		{id && state.status.match(/(Em trânsito)|(Entregue)|(Cancelado)/)
		?
			<div style={notAllowed}>Esse atendimento foi despachado ou cancelado e não pode mais ser editado</div>
		:
			<Fragment>
				<ErrorMessage message={state.error_start_date}>
					{id && state.status !== 'Escolhendo'
					?
						<input
							style={input}
							placeholder={formatDate(state.start_date)}
							disabled={true}
						/>
					:
						<DayPickerInput
							component={InputForDayPicker}
							placeholder='Data início'
							value={state.start_date}
							onDayChange={updateDayPicker('start_date')}
							formatDate={formatDate}
							dayPickerProps={dayPickerProps}
						/>
					}
				</ErrorMessage>
				<ErrorMessage message={state.error_representative}>
					<Dropdown
						name='representative'
						placeholder='Assessor'
						options={state.representatives}
						value={state.representative}
						updateParent={updateDropdown}
					/>
				</ErrorMessage>
				<ErrorMessage message={state.error_reseller}>
					<Dropdown
						name='reseller'
						placeholder='Lojista'
						options={state.resellers}
						value={state.reseller}
						updateParent={updateDropdown}
					/>
				</ErrorMessage>
				<ErrorMessage message={state.error_category}>	
					<Radio
						name='category'
						options={['Venda','Troca']}
						icons={[<SaleSvg />,<ReturnSvg />]}
						value={state.category}
						updateParent={updateRadio}
					/>
				</ErrorMessage>	
				<ErrorMessage message={state.error_type}>	
					<Radio
						name='type'
						options={['Online','Offline']}
						icons={[<WifiOnSvg />,<WifiOffSvg />]}
						value={state.type}
						updateParent={updateRadio}
					/>
				</ErrorMessage>
				<ErrorMessage message={state.error_end_date}>
					<DayPickerInput
						component={InputForDayPicker}
						placeholder='Data fim'
						value={state.end_date}
						onDayChange={updateDayPicker('end_date')}
						formatDate={formatDate}
						dayPickerProps={dayPickerProps}
					/>
				</ErrorMessage>
				<Submit
					submitForm={submitForm}
					uiState={state.uiState}
				/>
			</Fragment>
		}
	</div>

Form.propTypes = {
	state: PropTypes.object.isRequired,
	updateDropdown: PropTypes.func.isRequired,
	updateDayPicker: PropTypes.func.isRequired,
	updateRadio: PropTypes.func.isRequired,
	submitForm: PropTypes.func.isRequired
}

export default Form