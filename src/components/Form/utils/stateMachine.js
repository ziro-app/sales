/* Syntax -> const machine = { state: { action: next_state } } */
/* The state machine is an object whose keys are all the possible state names */
/* States are also objects whose keys are actions and whose values are the next possible states */
const machine = {
	idle: { FETCH: 'fetching', SUBMIT: 'submitting' },
	fetching: { SUCCESS: 'idle', ERROR: 'error' },
	submitting: { SUCCESS: 'idle', ERROR: 'error' },
	error: { FETCH: 'fetching', SUBMIT: 'submitting' }
}

export const

initialUiState = 'idle',

changeUiState = (that) => (action) => {
	that.setState( (prevState) => {
		return { uiState: machine[prevState.uiState][action] }
	})
}
