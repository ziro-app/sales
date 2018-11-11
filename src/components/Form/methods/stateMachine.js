/* Syntax -> const machine = { state: { action: next_state } } */
/* The state machine is an object whose keys are all the possible state names */
/* States are also objects whose keys are actions and whose values are the next possible states */
/* This state machine exists to catch errors derived from async code */

const machine = {
	idle: { FETCH: 'fetching', SUBMIT: 'submitting' },
	fetching: { SUCCESS: 'idle', ERROR: 'error_fetching' },
	submitting: { SUCCESS: 'submitted', ERROR: 'error_submitting' },
	submitted: { FETCH: 'fetching', SUBMIT: 'submitting' },
	error_fetching: { FETCH: 'fetching', SUBMIT: 'submitting' },
	error_submitting: { FETCH: 'fetching', SUBMIT: 'submitting' }
}

export const

initialUiState = 'idle',

changeUiState = that => action => {
	that.setState( ({ uiState }) => ({ uiState: machine[uiState][action] }) )
}