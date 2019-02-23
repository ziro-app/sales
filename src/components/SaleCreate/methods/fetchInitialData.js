import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		const id = that.props.match.params.id
		that.setState(await fetchFromSpreadsheet(id, get, that.cancelTokenSource))
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