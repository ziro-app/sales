import React, { Fragment } from 'react'
import FilterOpen from './components/FilterOpen'
import AddNew from '../AddNew/index'

const Panel = ({ sales }) =>
	<Fragment>	
		<FilterOpen sales={sales} />
		
		<AddNew />
	</Fragment>

export default Panel