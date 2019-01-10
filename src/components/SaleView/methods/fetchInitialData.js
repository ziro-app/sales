import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		const { sales, statuses } = await fetchFromSpreadsheet(get, that.cancelTokenSource)
		that.setState({ sales, statuses })
		that.changeUiState('SUCCESS')
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			that.changeUiState('ERROR')
			console.log(error.response)
		}
	}
}

export default fetchInitialData