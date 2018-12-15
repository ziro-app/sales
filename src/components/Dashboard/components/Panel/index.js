import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import FilterOpen from './components/FilterOpen'
import FilterScheduled from './components/FilterScheduled'
import FilterPayment from './components/FilterPayment'
import FilterPickup from './components/FilterPickup'
import FilterDropoff from './components/FilterDropoff'
import AddNew from '../AddNew/index'

const Panel = ({ sales }) =>
	<Fragment>	
		<FilterOpen sales={sales} />
		<FilterScheduled sales={sales} />
		<FilterPayment sales={sales} />
		<FilterPickup sales={sales} />
		<FilterDropoff sales={sales} />
		<AddNew />
	</Fragment>

Panel.propTypes = {
	sales: PropTypes.array.isRequired
}

export default Panel