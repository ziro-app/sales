import React, { Fragment } from 'react'
import FilterOpen from './components/FilterOpen'
import FilterScheduled from './components/FilterScheduled'
import FilterPayment from './components/FilterPayment'
import AddNew from '../AddNew/index'

const Panel = ({ sales }) =>
	<Fragment>	
		<FilterOpen sales={sales} />
		<FilterScheduled sales={sales} />
		<FilterPayment sales={sales} />
		<AddNew />
	</Fragment>

export default Panel