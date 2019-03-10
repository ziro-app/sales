import React from 'react'
import SaleView from '../../SaleView/index'

const renderSaleView = (props, { sales, statuses, logistics }, forceReloadAfterEdit) =>
	<SaleView
		{...props}
		sales={sales}
		statuses={statuses}
		logistics={logistics}
		forceReloadAfterEdit={forceReloadAfterEdit}
	/>

export default renderSaleView