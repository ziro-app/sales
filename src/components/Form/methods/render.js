/* import libraries */
import React from 'react'
/* import utils */
import formatDate from '../utils/formatDate'
import { dayPickerProps } from '../utils/dayPickerProps'
/* import components */
import Dropdown from '@ziro/dropdown'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import ErrorBoundary from '../../ErrorBoundary/index'
/* import styles */
import { form, title } from '../styles.js'

const render = (state, updateDropdown, updateDayPicker) =>
	<ErrorBoundary>
		<div style={form}>
			<h1 style={title}>Cadastrar atendimento</h1>
			<DayPickerInput
				placeholder='Iniciado em'
				onDayChange={updateDayPicker('start_date')}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
			<Dropdown
				name='representative'
				placeholder='Assessor'
				options={state.representatives}
				updateParent={updateDropdown}
			/>
			<Dropdown
				name='reseller'
				placeholder='Lojista'
				options={state.resellers}
				updateParent={updateDropdown}
			/>
			<DayPickerInput
				placeholder='Encerrado em'
				onDayChange={updateDayPicker('end_date')}
				formatDate={formatDate}
				dayPickerProps={dayPickerProps}
			/>
		</div>
	</ErrorBoundary>

export default render