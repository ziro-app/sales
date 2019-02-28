import React from 'react'
import SaleView from '../../SaleView/index'

const renderSaleView = (props, { sales, statuses }, forceReloadAfterEdit) =>
	<SaleView
		{...props}
		sales={sales}
		statuses={statuses}
		forceReloadAfterEdit={forceReloadAfterEdit}
	/>

export default renderSaleView