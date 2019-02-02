import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import FilterChoosing from './components/FilterChoosing'
import FilterScheduled from './components/FilterScheduled'
import FilterPaying from './components/FilterPaying'
import FilterPickingUp from './components/FilterPickingUp'
import FilterDroppingOff from './components/FilterDroppingOff'
import FilterDelivering from './components/FilterDelivering'
import AddNew from '../AddNew/index'

const Panel = ({ sales, windowWidth }) =>
	<Fragment>
		<FilterScheduled sales={sales} />
		<FilterChoosing sales={sales} />
		<FilterPaying sales={sales} />
		<FilterPickingUp sales={sales} />
		<FilterDroppingOff sales={sales} />
		<FilterDelivering sales={sales} />
		<AddNew windowWidth={windowWidth} />
	</Fragment>

Panel.propTypes = {
	sales: PropTypes.array.isRequired,
	windowWidth: PropTypes.number
}

export default Panel