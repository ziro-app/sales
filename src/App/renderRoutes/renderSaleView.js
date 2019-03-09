import React from 'react'
import SaleView from '../../SaleView/index'

const renderSaleView = (props, { sales, statuses, pickedup, droppedoff, tracking }, forceReloadAfterEdit) =>
	<SaleView
		{...props}
		sales={sales}
		statuses={statuses}
		pickedup={pickedup}
		droppedoff={droppedoff}
		tracking={tracking}
		forceReloadAfterEdit={forceReloadAfterEdit}
	/>

export default renderSaleView