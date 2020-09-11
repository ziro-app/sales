import React, { Fragment  } from 'react'
import PropTypes from 'prop-types'
import FilterChoosing from './components/FilterChoosing'
import FilterScheduled from './components/FilterScheduled'
import FilterPaying from './components/FilterPaying'
import FilterPickingUp from './components/FilterPickingUp'
import FilterDroppingOff from './components/FilterDroppingOff'
import FilterDelivering from './components/FilterDelivering'
import FilterAssessores from './components/FilterAssessores'
import calcSales from './utils/calcSales'
import removeDuplicates from './utils/removeDuplicates'
import AddNew from '../AddNew/index'

const Panel = ({ state, windowWidth, updateDropdown }) =>{
	const {sales, filterAssessores} = state
	const arrayAssessores = removeDuplicates(sales.filter(sale => {
		return sale[13] === 'Escolhendo' || sale[13] === 'Agendado' || sale[13] === 'Pagando' || sale[13] === 'Retirando' || sale[13] === 'Despachando' || sale[13] === 'Em trânsito'
	}).map(item => item[2]))
	const salesValue = calcSales(filterAssessores, arrayAssessores, sales)
	return (
		<Fragment>
			<FilterAssessores arrayAssessores={arrayAssessores} filterAssessores={filterAssessores} updateDropdown={updateDropdown}/>
			<FilterScheduled sales={salesValue} />
			<FilterChoosing sales={salesValue} />
			<FilterPaying sales={salesValue} />
			<FilterPickingUp sales={salesValue} />
			<FilterDroppingOff sales={salesValue} />
			<FilterDelivering sales={salesValue} />
			<AddNew windowWidth={windowWidth} />
		</Fragment>
	)
}

Panel.propTypes = {
	sales: PropTypes.array.isRequired,
	windowWidth: PropTypes.number
}

export default Panel