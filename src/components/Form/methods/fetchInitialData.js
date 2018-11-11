import { get, isCancel } from 'axios'
import fetchFromSpreadsheet from '../utils/fetchFromSpreadsheet'

const fetchInitialData = that => async () => {
	try {
		that.setState( await fetchFromSpreadsheet(get, that.cancelTokenSource) )
		// await Promise.reject('Erro ao carregar dados').then( value => console.log(value))
		that.changeUiState('SUCCESS')
	} catch (error) {
		if (isCancel(error))
			console.log('Request canceled')
		else {
			that.changeUiState('ERROR')
			console.log(error)
		}
	}
}

export default fetchInitialData